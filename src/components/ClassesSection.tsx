import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import gymBack from '@/assets/images/gym_back.png'

const classes = [
  {
    name: "Buns of Steel",
    description: "Lower-body focused HIIT that'll have you earning that pastry.",
    time: "45 min",
    intensity: "High"
  },
  {
    name: "Lift & Latte",
    description: "Morning strength session followed by artisan coffee and conversation.",
    time: "60 min",
    intensity: "Medium"
  },
  {
    name: "Cross-Training Circuits",
    description: "Full-body functional fitness that builds real-world strength.",
    time: "50 min",
    intensity: "High"
  }
]

const ClassesSection = () => {
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
            Signature Classes
          </h2>
          <p className="text-xl text-muted-foreground">
            Programs designed to challenge and reward
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <motion.div
              key={classItem.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full relative overflow-hidden border-2 hover:border-accent/50 transition-all duration-300 group hover:shadow-xl">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold">
                    COMING SOON
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="feature-title text-2xl mb-3 pr-24">
                    {classItem.name}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {classItem.description}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">⏱️ {classItem.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-foreground">🔥 {classItem.intensity}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <img 
            src={gymBack} 
            alt="Hot Buns Gym Interior" 
            className="w-full rounded-xl shadow-2xl border-4 border-border object-cover max-h-[600px]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ClassesSection
