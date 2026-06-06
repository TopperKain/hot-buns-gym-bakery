import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { Envelope } from '@phosphor-icons/react'

const STORAGE_KEY = 'signup-emails'

function getStoredEmails(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
    return []
  }
}

function addStoredEmail(email: string): void {
  const current = getStoredEmails()
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...current, email]))
}

const SignupSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    const emails = getStoredEmails()
    if (emails.includes(email.toLowerCase())) {
      toast.info('You\'re already on the list! We\'ll notify you when we open.')
      setIsSubmitting(false)
      setEmail('')
      return
    }

    addStoredEmail(email.toLowerCase())
    
    toast.success('You\'re in! Get ready for gains and grains.', {
      description: 'We\'ll email you as soon as we open our doors.',
    })
    
    setEmail('')
    setIsSubmitting(false)
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
                onChange={(e) => setEmail(e.target.value)}
                className="text-lg py-6 border-2 focus:border-secondary"
                required
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="cta-button w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Adding you...' : 'Notify Me'}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6 italic">
            No spam, just hot buns. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SignupSection
