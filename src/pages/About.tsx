import { motion } from 'framer-motion'
import { Download, ArrowLeft, Code2, Database, Globe, Zap, Award, Users, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const About = () => {
  const stats = [
    { icon: <Code2 className="w-6 h-6" />, label: 'Proyectos Completados', value: '2+' },
    { icon: <Users className="w-6 h-6" />, label: 'Clientes Satisfechos', value: '2' },
    { icon: <Clock className="w-6 h-6" />, label: 'Horas de Estudio', value: '800+' },
    { icon: <Award className="w-6 h-6" />, label: 'Certificaciones', value: '4' }
  ]

  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['JavaScript (ES6+)', 'React 18', 'TypeScript', 'CSS Modules', 'Sass', 'Tailwind CSS'],
      description: 'Desarrollo de interfaces de usuario modernas y responsivas'
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Node.js 20', 'Express 5', 'PostgreSQL 15', 'RESTful APIs', 'JWT'],
      description: 'APIs robustas y bases de datos optimizadas'
    },
    {
      category: 'Performance',
      icon: <Zap className="w-6 h-6" />,
      technologies: ['Lighthouse', 'Core Web Vitals', 'WebP', 'Lazy Loading', 'JSON-LD'],
      description: 'Optimización para velocidad y SEO'
    }
  ]

  const timeline = [
    {
      year: '2024',
      title: 'Inicio del Desarrollo Web',
      description: 'Comencé mi formación en desarrollo web con HENRY, enfocándome en tecnologías modernas como React y Node.js.'
    },
    {
      year: 'Enero 2024',
      title: 'Primer Proyecto Real - AviDelta',
      description: 'Desarrollé mi primer sitio web para un cliente real: un centro de masajes en Nordelta con enfoque en SEO local.'
    },
    {
      year: '2024',
      title: 'Certificaciones Completadas',
      description: 'Obtuve certificaciones en JavaScript, React y desarrollo web responsive de freeCodeCamp y Platzi.'
    },
    {
      year: 'Septiembre 2025',
      title: 'Proyecto Avanzado - StronMuebles',
      description: 'Creé un catálogo online completo con TypeScript, integración WordPress y sistema de rutas personalizado.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Sobre Mí - Edisson Facundo Aquino Toloza</title>
        <meta name="description" content="Conoce mi historia como desarrollador Full-Stack. Formación en Henry, proyectos reales para clientes locales y pasión por crear soluciones web eficientes." />
      </Helmet>

      <div className="pt-16">
        {/* Header */}
        <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <Link 
                to="/" 
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver al Inicio
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Sobre <span className="gradient-text">Mí</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Desarrollador Full-Stack apasionado por crear soluciones web 
                que marquen la diferencia en el mundo real.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-dark-800">
          <div className="container-max">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-2"
                >
                  <div className="w-12 h-12 bg-primary-600/20 rounded-lg mx-auto flex items-center justify-center text-primary-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-white">
                  Mi Historia
                </h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Mi nombre es Edisson Facundo Aquino Toloza y soy un desarrollador Full-Stack 
                    apasionado por crear soluciones web que realmente funcionen en el mundo real.
                  </p>
                  <p>
                    Comencé mi formación en desarrollo web con HENRY, donde completé más de 
                    800 horas de estudio intensivo en tecnologías modernas como React, Node.js 
                    y PostgreSQL. Lo que más me motiva es la posibilidad de crear aplicaciones 
                    que resuelvan problemas reales.
                  </p>
                  <p>
                    He desarrollado proyectos reales para empresas locales, 
                    incluyendo un centro de masajes en Nordelta y una 
                    mueblería en Tigre. Esta experiencia me ha enseñado la importancia de 
                    entender las necesidades del negocio, trabajar con deadlines y crear 
                    soluciones escalables que generen valor real.
                  </p>
                  <p>
                    Mi enfoque está en escribir código limpio, crear interfaces intuitivas 
                    y optimizar para performance y SEO. Siempre estoy aprendiendo nuevas 
                    tecnologías y mejorando mis habilidades.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8">
                  <div className="bg-dark-800 rounded-xl p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="text-primary-400">const developer = {'{'} </div>
                      <div className="ml-4 text-gray-300">name: "Edisson Facundo Aquino Toloza",</div>
                      <div className="ml-4 text-gray-300">role: "Full-Stack Developer",</div>
                      <div className="ml-4 text-gray-300">passion: "Real-world solutions",</div>
                      <div className="ml-4 text-gray-300">experience: "2+ real projects",</div>
                      <div className="text-primary-400"> {'}'};</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section-padding bg-dark-800">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Mis Habilidades
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Tecnologías y herramientas que domino para crear soluciones web completas.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                        <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                          {skill.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors">
                        {skill.category}
                      </h3>
                    </div>
                    
                    <p className="text-gray-400 text-sm">
                      {skill.description}
                    </p>
                    
                    <div className="space-y-2">
                      {skill.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                          <span className="text-sm text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Mi Trayectoria
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Un recorrido por mi formación y proyectos más importantes.
              </p>
            </motion.div>

            <div className="relative">
              {/* Línea conectora vertical */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-600"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Círculo del año */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-4 border-dark-800 hover:scale-110 transition-transform duration-300">
                        {item.year.includes('2024') ? '2024' : item.year.includes('2025') ? '2025' : item.year}
                      </div>
                      {/* Punto brillante en el centro */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                    </div>
                    
                    {/* Contenido */}
                    <div className="flex-1 space-y-3 pb-8">
                      <div className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Estoy listo para unirme a un equipo, aportar valor desde el primer día y crecer profesionalmente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contacto" 
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center group"
                >
                  Contactar Ahora
                  <ArrowLeft className="ml-2 w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
                </Link>
                <a
                  href="/CV_FacundoToloza_Mejorado.pdf"
                  download
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center justify-center group"
                >
                  <Download className="mr-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Descargar CV
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
