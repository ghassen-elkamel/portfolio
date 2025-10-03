import { Home, Briefcase, Mail } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Briefcase, label: 'Projects', href: '#projects' },
    { icon: Mail, label: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="py-12 border-t border-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <link.icon className="w-4 h-4" />
                <span className="text-sm">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="text-center text-sm text-muted-foreground space-y-1">
            <p>© 2025 Ghassen Elkamel</p>
            <p>Built with React 19 • Tailwind CSS • Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

