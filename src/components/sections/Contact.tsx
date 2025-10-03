import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { NeuroCard } from '../ui/neuro-card'
import { NeuroButton } from '../ui/neuro-button'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type FormData = z.infer<typeof formSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
    alert('Message sent! (Demo only)')
    reset()
  }

  const contactLinks = [
    {
      icon: Mail,
      href: 'mailto:ghassen.elkamel.07@gmail.com',
      label: 'Email',
      color: 'text-primary'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ghassen-elkamel/',
      label: 'LinkedIn',
      color: 'text-[#0A66C2]'
    },
    {
      icon: Github,
      href: 'https://github.com/ghassen-elkamel',
      label: 'GitHub',
      color: 'text-foreground'
    },
    {
      icon: Phone,
      href: 'tel:+21693170286',
      label: '+216 93 170 286',
      color: 'text-accent'
    }
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-primary/5 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              left: `${30 * i}%`,
              top: `${20 * i}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <NeuroCard className="p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-[1.5rem] shadow-[var(--shadow-neuro-inset)] bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  {errors.name && (
                    <p className="mt-2 text-xs sm:text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-[1.5rem] shadow-[var(--shadow-neuro-inset)] bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  {errors.email && (
                    <p className="mt-2 text-xs sm:text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <textarea
                    {...register('message')}
                    rows={6}
                    placeholder="Your Message"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-[1.5rem] shadow-[var(--shadow-neuro-inset)] bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="mt-2 text-xs sm:text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <NeuroButton
                  type="submit"
                  variant="primary"
                  size="default"
                  disabled={isSubmitting}
                  className="w-full text-sm sm:text-base"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </NeuroButton>
              </form>
            </NeuroCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
          >
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={`group relative`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-[var(--shadow-neuro)] hover:shadow-[var(--shadow-neuro-inset)] transition-all duration-500 flex items-center justify-center bg-background">
                  <link.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${link.color}`} />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-medium text-muted-foreground">
                  {link.label}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

