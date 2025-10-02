import { motion } from 'framer-motion'
import { ArrowRight, Code2, Database, Globe, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'

const Home = () => {
  const projects = [
    {
      id: 1,
      title: 'AviDelta.online',
      description: 'Centro de masajes en Nordelta con enfoque en conversión por WhatsApp (Proyecto completado)',
      image: '/ProyectoAvi.png',
      technologies: ['React 18', 'Sass', 'SEO Local'],
      liveUrl: 'https://avi-chi.vercel.app/',
      githubUrl: 'https://github.com/AquinoEdissonFacundo/Avi',
      featured: true,
      client: 'Cliente real - Nordelta, Tigre',
      date: 'Enero 2024',
      status: 'Completado'
    },
    {
      id: 2,
      title: 'StronMuebles.com',
      description: 'Catálogo online de mueblería con integración WordPress y sistema de rutas',
      image: '/ProyectoMuebleria.png',
      technologies: ['React 18', 'TypeScript', 'WordPress', 'Sitemap'],
      liveUrl: 'https://stronmuebles.com',
      githubUrl: 'https://github.com/AquinoEdissonFacundo/muebleria',
      featured: true,
      client: 'Cliente real - Tigre',
      date: 'Septiembre 2025'
    }
  ]

  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['JavaScript (ES6+)', 'React 18', 'TypeScript', 'CSS Modules', 'Sass', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Node.js 20', 'Express 5', 'PostgreSQL 15', 'RESTful APIs', 'JWT']
    },
    {
      category: 'Herramientas',
      icon: <Code2 className="w-6 h-6" />,
      technologies: ['Git/GitHub', 'Vite', 'ESLint', 'WordPress REST API', 'SEO']
    },
    {
      category: 'Performance',
      icon: <Zap className="w-6 h-6" />,
      technologies: ['Lighthouse', 'Core Web Vitals', 'WebP', 'Lazy Loading', 'JSON-LD']
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                  Hola, soy{' '}
                  <span className="gradient-text">Edisson Facundo</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300">
                  Desarrollador Full-Stack
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl">
                  Especializado en React, Node.js y PostgreSQL. Creo soluciones web 
                  eficientes y centradas en el usuario para clientes reales.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/proyectos" className="btn-primary inline-flex items-center justify-center group">
                  Ver Proyectos
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contacto" className="btn-secondary inline-flex items-center justify-center">
                  Contactar
                </Link>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">2+</div>
                  <div className="text-sm text-gray-400">Proyectos Reales</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">800+</div>
                  <div className="text-sm text-gray-400">Horas de Estudio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-400">100%</div>
                  <div className="text-sm text-gray-400">Dedicación</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-dark-800 rounded-2xl p-4 shadow-2xl">
                  <img 
                    src="/Facundo.jpeg" 
                    alt="Edisson Facundo Aquino Toloza - Desarrollador Full-Stack"
                    className="w-80 h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Disponible</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="proyectos" className="section-padding bg-dark-800">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Trabajos reales para clientes locales, demostrando habilidades técnicas 
              y capacidad de entrega.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/proyectos" className="btn-secondary inline-flex items-center group">
              Ver Todos los Proyectos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Habilidades Técnicas
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones web completas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                ¿Buscas un desarrollador?
              </h2>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Estoy listo para aportar valor al equipo y crecer profesionalmente.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center group">
                Contactar Ahora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/CV_EdissonFacundoAquinoToloza.txt"
                download
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center justify-center"
              >
                Descargar CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
