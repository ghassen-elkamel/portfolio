import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { experience } from '@/data/experience'
import { NeuroCard } from '../ui/neuro-card'

export function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(0)

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Journey
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                <div className="absolute left-0 top-4 sm:top-6 w-10 h-10 sm:w-16 sm:h-16 rounded-full shadow-[var(--shadow-neuro)] bg-background flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full shadow-[var(--shadow-neuro-inset)] bg-primary/20 flex items-center justify-center text-[0.5rem] leading-tight sm:text-xs font-bold text-primary text-center">
                    {exp.period.split(' - ')[0]}
                  </div>
                </div>

                <NeuroCard
                  className="cursor-pointer"
                  onClick={() => setExpandedId(expandedId === index ? null : index)}
                >
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground break-words">
                          {exp.company}
                        </h3>
                        <p className="text-base sm:text-lg text-primary font-medium">
                          {exp.role}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-2 text-xs sm:text-sm text-muted-foreground">
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedId === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
                      </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 rounded-lg shadow-[var(--shadow-neuro-inset)] text-[0.65rem] sm:text-xs font-medium text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedId === index ? 'auto' : 0,
                        opacity: expandedId === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 sm:pt-4 border-t border-muted space-y-2 sm:space-y-3">
                        <p className="text-sm sm:text-base text-muted-foreground italic">
                          {exp.notable}
                        </p>
                        {exp.achievements && (
                          <ul className="space-y-1.5 sm:space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs sm:text-sm text-foreground"
                              >
                                <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
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

