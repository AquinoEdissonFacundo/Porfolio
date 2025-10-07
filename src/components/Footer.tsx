import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary-600 rounded-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Edisson Facundo Aquino Toloza</span>
            </div>
            <p className="text-gray-400 text-sm">
              Desarrollador Full-Stack especializado en React, Node.js y PostgreSQL.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/proyectos" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Proyectos
                </Link>
              </li>
              <li>
                <a href="/#habilidades" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Habilidades
                </a>
              </li>
              <li>
                <Link to="/sobre-mi" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contacto</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/AquinoEdissonFacundo"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-700 hover:bg-primary-600 rounded-lg transition-colors group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/facundo-toloza-desarrollador-web/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-700 hover:bg-primary-600 rounded-lg transition-colors group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:aquinoedissonfacundo@gmail.com"
                className="p-2 bg-dark-700 hover:bg-primary-600 rounded-lg transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Edisson Facundo Aquino Toloza. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
