import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  const scrollToSignup = () => {
    const signupSection = document.getElementById('signup')
    if (signupSection) {
      signupSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary via-primary/95 to-primary/80" />

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
