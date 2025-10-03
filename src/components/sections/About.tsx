import { motion } from 'framer-motion'
import { Calendar, Rocket, TrendingUp, Code, Award, Users, Globe } from 'lucide-react'
import { NeuroCard } from '../ui/neuro-card'
import profilePic from '@/assets/profile_pic.png'

export function About() {
  const stats = [
    { icon: Calendar, label: 'Experience', value: '3+ Years' },
    { icon: Rocket, label: 'Projects', value: '15+' },
    { icon: TrendingUp, label: 'Impact', value: '60%↑' }
  ]

  const badges = [
    { icon: Code, label: 'Problem Solving' },
    { icon: Award, label: 'Azure & ML Certified' },
    { icon: Users, label: 'JCI Member & Mentor' },
    { icon: Globe, label: 'Multilingual' }
  ]

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <NeuroCard size="lg" className="p-4 sm:p-6 md:p-8 h-full flex items-center justify-center">
              <div className="w-full aspect-square rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-neuro-inset)]">
                <img 
                  src={profilePic} 
                  alt="Ghassen Elkamel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </NeuroCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                The Developer
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Full Stack Mobile Developer at Smavoo GmbH, building enterprise apps for Volkswagen & KONE. 
                Expert in Flutter, NestJS, and scalable architectures.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NeuroCard size="lg" className="p-3 sm:p-4 md:p-6 text-center space-y-2 sm:space-y-3 hover:scale-105 transition-transform">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mx-auto text-primary" />
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </NeuroCard>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <NeuroCard className="p-3 sm:p-4 flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform">
                    <badge.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">
                      {badge.label}
                    </span>
                  </NeuroCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

