import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Barbell, Coffee, Trophy } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: Barbell,
    title: "Strength Training Classes",
    description: "High-energy cross-training and weight-lifting sessions led by certified trainers who know how to push you to your best.",
    color: "text-accent"
  },
  {
    icon: Coffee,
    title: "Artisan Bakery",
    description: "Fresh pastries baked daily, signature drinks crafted by expert baristas, and high-protein treats for the health-conscious.",
    color: "text-secondary"
  },
  {
    icon: Trophy,
    title: "The Reward Loop",
    description: "Every class includes a free pastry. Work hard, eat well, repeat. It's the motivation you didn't know you needed.",
    color: "text-accent"
  }
]

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl text-foreground mb-4">
            Why Hot Buns?
          </h2>
          <p className="text-xl text-muted-foreground">
            The perfect blend of fitness and flavor
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-2 hover:border-secondary/50 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`${feature.color} w-10 h-10`} weight="duotone" />
                  </div>
                  <CardTitle className="feature-title text-2xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
