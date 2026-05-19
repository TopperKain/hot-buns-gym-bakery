import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const menuItems = [
  {
    name: "Hot Buns Cinnamon Roll",
    description: "Our signature pastry—warm, gooey, and worth every rep.",
    emoji: "🥐",
    gradient: "from-secondary/20 to-accent/10"
  },
  {
    name: "Protein-Packed Muffins",
    description: "25g of protein, zero guilt. Gains in muffin form.",
    emoji: "🧁",
    gradient: "from-accent/20 to-secondary/10"
  },
  {
    name: "The Deadlift Cold Brew",
    description: "Strong enough to lift your spirits and your PRs.",
    emoji: "☕",
    gradient: "from-primary/10 to-secondary/20"
  },
  {
    name: "The PR Protein Mocha",
    description: "Chocolate, espresso, and 30g of whey. New personal record unlocked.",
    emoji: "🍫",
    gradient: "from-accent/10 to-primary/10"
  }
]

const MenuSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl md:text-5xl text-foreground mb-4">
            Fuel Your Fire
          </h2>
          <p className="text-xl text-muted-foreground">
            Sample selections from our bakery & coffee bar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="cursor-pointer"
            >
              <Card className={`h-full bg-gradient-to-br ${item.gradient} border-2 hover:border-secondary transition-all duration-300 shadow-md hover:shadow-2xl`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{item.emoji}</div>
                    <div className="flex-1">
                      <CardTitle className="feature-title text-2xl mb-2">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection
