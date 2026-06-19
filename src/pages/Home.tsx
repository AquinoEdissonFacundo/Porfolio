import { motion } from 'framer-motion'
import { ArrowRight, Code2, Database, Globe, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import SkillCard from '../components/SkillCard'

const Home = () => {
  const projects = [
    {
      id: 3,
      title: 'Studio Suite',
      description: 'SaaS + CRM multi-tenant para centros de belleza: turnos, clientes, pagos y staff. Reservas online 24/7 con seña obligatoria vía Mercado Pago OAuth.',
      image: './studioSuite.png',
      technologies: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Mercado Pago', 'Inngest', 'Redis'],
      liveUrl: 'https://studio-suite-lac.vercel.app/',
      featured: true,
      client: 'Producto propio (SaaS)',
      date: 'Junio 2026'
    },
    {
      id: 2,
      title: 'StronMuebles.com',
      description: 'Catálogo de mueblería con integración WordPress y sistema de rutas personalizado.',
      image: './ProyectoMuebleria.png',
      technologies: ['React 18', 'TypeScript', 'WordPress REST API', 'Sitemap'],
      liveUrl: 'https://stronmuebles.com',
      featured: true,
      client: 'Cliente real - Tigre',
      date: 'Septiembre 2025'
    }
  ]

  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      technologies: ['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'JavaScript (ES6+)']
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'RESTful APIs', 'Better Auth', 'Mercado Pago']
    },
    {
      category: 'Infraestructura',
      icon: <Zap className="w-6 h-6" />,
      technologies: ['Inngest', 'Upstash Redis', 'Resend', 'Sentry', 'Neon (serverless)']
    },
    {
      category: 'Herramientas',
      icon: <Code2 className="w-6 h-6" />,
      technologies: ['Git/GitHub', 'Vite', 'WordPress REST API', 'SEO', 'JSON-LD']
    },
    {
      category: 'Deploy & Hosting',
      icon: <Code2 className="w-6 h-6" />,
      technologies: ['Vercel', 'Netlify', 'Railway', 'Supabase', 'DonWeb', 'Hostinger']
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
                  Me especializo en aplicaciones web eficientes y escalables, enfocado en resolver problemas reales con código limpio. Construí Studio Suite, un SaaS + CRM multi-tenant para centros de belleza con pagos integrados y arquitectura serverless, y desarrollé proyectos para clientes reales como una mueblería en Tigre. Siempre orientado a los objetivos del negocio.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/proyectos" className="btn-primary inline-flex items-center justify-center group">
                  Ver Proyectos
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contacto" className="btn-secondary inline-flex items-center justify-center">
                  Agendar Reunión
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
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 shadow-2xl">
                <div className="bg-dark-800 rounded-xl p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-500 text-xs font-mono ml-2">studio-suite/booking.ts</span>
                  </div>
                  <div className="space-y-1 font-mono text-xs leading-relaxed">
                    <div className="text-gray-500">{"// prevenir race conditions en reservas"}</div>
                    <div><span className="text-primary-400">await</span> <span className="text-white">db.transaction</span><span className="text-gray-400">(async (tx) {"=> {"}</span></div>
                    <div className="ml-4"><span className="text-primary-400">await</span> <span className="text-white">tx.execute</span><span className="text-gray-400">(</span><span className="text-green-400">sql`SELECT FOR UPDATE`</span><span className="text-gray-400">)</span></div>
                    <div className="ml-4"><span className="text-primary-400">await</span> <span className="text-white">insertBooking</span><span className="text-gray-400">{"({ studioId, slot })"}</span></div>
                    <div><span className="text-gray-400">{"});"}</span></div>
                    <div className="mt-2"><span className="text-primary-400">await</span> <span className="text-white">inngest.send</span><span className="text-gray-400">{"({ name: "}</span><span className="text-green-400">"booking/confirmed"</span><span className="text-gray-400">{" })"}</span></div>
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
                <ProjectCard project={project} isClickable={true} />
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
              Agendemos una reunión para discutir cómo puedo aportar valor a tu proyecto.
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center group">
                Agendar Reunión
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/CvEdissonToloza2025.pdf"
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
