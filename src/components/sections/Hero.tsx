import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Briefcase, Sparkles } from 'lucide-react'
import { NeuroButton } from '../ui/neuro-button'
import profilePic from '@/assets/profile_pic.png'
import resumePdf from '@/assets/GHASSEN_ELKAMEL_Resume.pdf'

export function Hero() {
  const techBadges = [
    { name: 'Flutter', gradient: 'from-blue-500 to-cyan-400' },
    { name: 'Dart', gradient: 'from-cyan-500 to-teal-400' },
    { name: 'NestJS', gradient: 'from-red-500 to-pink-500' },
    { name: 'MongoDB', gradient: 'from-green-500 to-emerald-400' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8 md:space-y-10"
            >
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-[1.5rem] bg-background shadow-[var(--shadow-neuro-sm)]"
                >
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground">Available for Opportunities</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
                >
                  <span className="bg-gradient-to-r from-primary via-terracotta to-accent bg-clip-text text-transparent">
                    Ghassen
                  </span>
                  <br />
                  <span className="text-foreground">Elkamel</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-accent"
                >
                  Full Stack Mobile Developer
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
                >
                  Building enterprise mobile apps for Volkswagen & KONE at Smavoo GmbH. 
                  Expertise in Flutter, NestJS, and scalable architectures.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-2 sm:gap-3"
                >
                  {techBadges.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className={`px-4 sm:px-6 py-2 sm:py-3 rounded-[1.5rem] bg-gradient-to-r ${tech.gradient} text-white font-semibold text-xs sm:text-sm shadow-[var(--shadow-neuro)] hover:shadow-[var(--shadow-neuro-hover)] transition-all duration-500 hover:scale-105`}
                    >
                      {tech.name}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap gap-3 sm:gap-4"
              >
                <NeuroButton
                  variant="primary"
                  size="default"
                  className="text-sm sm:text-base"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  View Work
                </NeuroButton>
                
                <NeuroButton
                  variant="accent"
                  size="default"
                  className="text-sm sm:text-base"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get in Touch
                </NeuroButton>
                
                <NeuroButton
                  size="default"
                  className="text-sm sm:text-base"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = resumePdf
                    link.download = 'Ghassen_Elkamel_Resume.pdf'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Resume
                </NeuroButton>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                <div className="relative w-full h-full rounded-[2rem] sm:rounded-[3rem] bg-background shadow-[var(--shadow-neuro-lg)] p-2 sm:p-3">
                  <div className="w-full h-full rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-[var(--shadow-neuro-inset)]">
                    <img 
                      src={profilePic} 
                      alt="Ghassen Elkamel" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <motion.div
                  className="absolute top-1/4 -right-2 sm:-right-4 md:-right-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-[1.5rem] bg-background shadow-[var(--shadow-neuro-lg)]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">3+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Years Exp</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-1/4 -left-2 sm:-left-4 md:-left-6 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-[1.5rem] bg-background shadow-[var(--shadow-neuro-lg)]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-terracotta">10+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="p-3 rounded-full bg-background shadow-[var(--shadow-neuro-sm)]">
            <ArrowDown className="w-6 h-6 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

