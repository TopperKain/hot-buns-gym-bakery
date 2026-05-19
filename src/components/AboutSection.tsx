import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Sweat now. Sweet later.
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p>
              At <span className="font-semibold text-foreground">Hot Buns Gym & Bakery</span>, we believe the best rewards are earned, not given. That's why we've created the ultimate combo: intense cross-training and weight-lifting classes paired with artisan pastries and expertly crafted coffee.
            </p>
            
            <p className="text-2xl md:text-3xl font-semibold text-secondary my-8">
              Every class includes a free pastry. Yes, really.
            </p>
            
            <p>
              Push your limits in our state-of-the-art gym, then treat yourself to fresh-baked croissants, protein-packed muffins, and specialty coffee drinks. It's the perfect balance of discipline and indulgence.
            </p>
            
            <p className="italic text-muted-foreground/80">
              "Because life's too short for boring gyms and mediocre pastries."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
