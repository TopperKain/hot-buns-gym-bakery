import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Envelope } from '@phosphor-icons/react'
import { trackEvent } from '@/lib/appInsights'
import { hasWaitlistApi, submitWaitlistEmail } from '@/lib/waitlist'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const SignupSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const normalizedEmail = email.trim().toLowerCase()

    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      setEmailError('Please enter a valid email address.')
      return
    }

    if (!hasWaitlistApi) {
      toast.error('Waitlist is temporarily unavailable.', {
        description: 'Please check back soon while we finish setup.',
      })
      trackEvent('waitlist_signup_unavailable')
      return
    }

    setEmailError('')
    setIsSubmitting(true)

    try {
      const submissionResult = await submitWaitlistEmail(normalizedEmail)
      const emailDomain = normalizedEmail.split('@')[1] ?? 'unknown'

      if (submissionResult === 'already_registered') {
        toast.info('You\'re already on the list! We\'ll notify you when we open.')
        trackEvent('waitlist_signup_duplicate', { emailDomain })
      } else {
        toast.success('You\'re in! Get ready for gains and grains.', {
          description: 'We\'ll email you as soon as we open our doors.',
        })
        trackEvent('waitlist_signup_success', { emailDomain })
      }

      setEmail('')
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Please try again in a minute.'

      toast.error('Could not join the waitlist.', {
        description: errorMessage,
      })
      trackEvent('waitlist_signup_failure')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="signup" ref={ref} className="py-24 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-8">
            <Envelope className="text-accent w-16 h-16 mx-auto mb-4" weight="duotone" />
          </div>
          
          <h2 className="section-title text-4xl md:text-5xl text-foreground mb-6">
            Be the first to know when we open
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Join our waitlist for exclusive launch updates, special offers, and first access to class schedules.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-left block text-base font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (emailError) {
                    setEmailError('')
                  }
                }}
                className="text-lg py-6 border-2 focus:border-secondary"
                aria-invalid={Boolean(emailError)}
                aria-describedby={emailError ? 'email-error' : undefined}
                required
              />
              {emailError && (
                <p id="email-error" role="alert" className="text-sm text-destructive text-left">
                  {emailError}
                </p>
              )}
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || !hasWaitlistApi}
              className="cta-button w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {hasWaitlistApi ? (isSubmitting ? 'Adding you...' : 'Notify Me') : 'Waitlist Unavailable'}
            </Button>
          </form>

          {!hasWaitlistApi && (
            <p className="text-sm text-destructive mt-4">
              Waitlist signup is being configured for this environment.
            </p>
          )}

          <p className="text-sm text-muted-foreground mt-6 italic">
            No spam, just hot buns. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SignupSection
