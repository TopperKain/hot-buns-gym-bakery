import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import heroImage from '@/assets/images/IMG_2641.png'

const HeroSection = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup')
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/80 via-primary/85 to-primary/90" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-full border-2 border-accent/30">
              <span className="text-accent text-xl">🔥</span>
              <span className="text-primary-foreground font-medium tracking-wide">OPENING SOON</span>
              <span className="text-accent text-xl">🥐</span>
            </div>
          </motion.div>

          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6">
            Hot Buns<br />Gym & Bakery
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-primary-foreground/90 mb-4 font-medium">
            Where gains meet grains.
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
            Crush your workout. Earn your pastry. Repeat.
          </p>

          <Button 
            onClick={scrollToSignup}
            size="lg"
            className="cta-button bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Get Updates
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-primary-foreground/50 text-sm"
        >
          ↓ Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
