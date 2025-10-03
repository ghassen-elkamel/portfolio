import { motion } from 'framer-motion'
import { useState } from 'react'
import { skills } from '@/data/skills'
import { NeuroCard } from '../ui/neuro-card'

export function Skills() {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'backend' | 'tools'>('all')

  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(s => s.category === filter)

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'backend', label: 'Backend' },
    { value: 'tools', label: 'Tools' }
  ] as const

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-[1.5rem] transition-all duration-500 font-semibold text-sm sm:text-base ${
                filter === f.value
                  ? 'shadow-[var(--shadow-neuro-inset)] bg-background text-foreground'
                  : 'shadow-[var(--shadow-neuro)] bg-background text-muted-foreground hover:text-foreground hover:shadow-[var(--shadow-neuro-hover)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <NeuroCard size="lg" className="p-4 sm:p-6 md:p-8 text-center space-y-3 sm:space-y-4 md:space-y-6 group cursor-pointer">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto">
                  <div
                    className="w-full h-full rounded-[1.5rem] shadow-[var(--shadow-neuro-inset)] flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-bold transition-transform group-hover:scale-110"
                    style={{ color: skill.color }}
                  >
                    {skill.name.substring(0, 2)}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg text-foreground">{skill.name}</h3>
                  <div className="mt-2 sm:mt-3 w-full bg-background rounded-full h-2 sm:h-3 shadow-[var(--shadow-neuro-inset)] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-muted-foreground mt-1 sm:mt-2">
                    {skill.proficiency}%
                  </p>
                </div>
              </NeuroCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

