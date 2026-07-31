import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Casos de éxito', path: '/casos-de-exito' },
    { name: 'Cómo trabajo', path: '/como-trabajo' },
    { name: 'Escritos', path: '/escritos' },
    { name: 'Contacto', path: '/contacto' },
  ]

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-6">
          <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-foreground">
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-background border border-border font-mono text-xs text-accent tracking-wider">
              {'</>'}
            </span>
            Edisson Toloza
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.path)
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative py-2 text-sm transition-colors ${
                    active ? 'text-foreground' : 'text-muted hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {active && (
                    <span className="absolute left-0 right-0 -bottom-px h-px bg-accent" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted hover:text-foreground transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border">
            {navItems.map((item) => {
              const active = isActive(item.path)
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-3 text-sm transition-colors ${
                    active ? 'text-foreground' : 'text-muted hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
