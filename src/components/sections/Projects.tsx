import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, X } from 'lucide-react'
import { projects, Project } from '@/data/projects'
import { NeuroCard } from '../ui/neuro-card'
import { NeuroButton } from '../ui/neuro-button'

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'backend' | 'enterprise'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter)

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'enterprise', label: 'Enterprise' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'backend', label: 'Backend' }
  ] as const

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Work
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <NeuroCard
                className="overflow-hidden cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl font-bold text-primary/30">
                    {project.title.substring(0, 2)}
                  </div>
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center space-y-3 p-6">
                      <div className="flex flex-wrap justify-center gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg shadow-[var(--shadow-neuro-inset)] text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {project.metrics.value}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {project.metrics.label}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {project.company} {project.client && `• ${project.client}`}
                  </p>
                  <p className="text-xs text-accent mt-2">{project.year}</p>
                </div>
              </NeuroCard>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <NeuroCard className="p-4 sm:p-6 md:p-8">
              <div className="flex items-start justify-between mb-4 sm:mb-6 gap-2">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-2 break-words">
                    {selectedProject.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                    {selectedProject.company}
                    {selectedProject.client && ` • ${selectedProject.client}`}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg shadow-[var(--shadow-neuro)] hover:shadow-[var(--shadow-neuro-inset)] transition-all duration-500 flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl mb-6 flex items-center justify-center">
                <div className="text-8xl font-bold text-primary/30">
                  {selectedProject.title.substring(0, 2)}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Description</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground">
                        <span className="text-primary mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-lg shadow-[var(--shadow-neuro)] text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl shadow-[var(--shadow-neuro-inset)] bg-primary/5">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      {selectedProject.metrics.value}
                    </div>
                    <p className="text-muted-foreground">{selectedProject.metrics.label}</p>
                  </div>
                </div>

                {selectedProject.links && (
                  <div className="flex gap-4">
                    {selectedProject.links.live && (
                      <NeuroButton
                        onClick={() => window.open(selectedProject.links!.live, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </NeuroButton>
                    )}
                    {selectedProject.links.github && (
                      <NeuroButton
                        onClick={() => window.open(selectedProject.links!.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </NeuroButton>
                    )}
                  </div>
                )}
              </div>
            </NeuroCard>
          </motion.div>
        </div>
      )}
    </section>
  )
}

