import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-max px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-sm text-muted">Edisson Toloza</span>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/AquinoEdissonFacundo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/facundo-toloza-desarrollador-web/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:aquinoedissonfacundo@gmail.com"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <span className="text-sm text-muted">© 2026 Edisson Toloza</span>
      </div>
    </footer>
  )
}

export default Footer
