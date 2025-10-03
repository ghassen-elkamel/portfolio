import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '@/data/certifications'
import { NeuroCard } from '../ui/neuro-card'

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Credentials
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto gap-4 sm:gap-6 pb-8 scrollbar-hide">
          <div className="flex gap-4 sm:gap-6 mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0"
              >
                <NeuroCard className="w-56 sm:w-64 p-6 sm:p-8 text-center space-y-3 sm:space-y-4 hover:scale-105 transition-transform">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full shadow-[var(--shadow-neuro-inset)] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-accent mt-2">{cert.date}</p>
                  </div>
                </NeuroCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

