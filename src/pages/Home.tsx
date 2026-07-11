import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

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

  const stats = [
    { value: '3', label: 'Productos en producción' },
    { value: '100%', label: 'Proyectos entregados' },
    { value: '24/7', label: 'Reservas y pagos operando' },
  ]

  const pillars = [
    {
      title: 'Desarrollo orientado al negocio',
      description: 'No escribo código por escribir. Cada decisión busca generar impacto.'
    },
    {
      title: 'Arquitectura preparada para crecer',
      description: 'Diseñado para crecer junto con tu negocio.'
    },
    {
      title: 'Comunicación clara',
      description: 'Trabajo cerca del cliente durante todo el proceso.'
    }
  ]

  const solutions = [
    'Reservas online',
    'Plataformas internas',
    'E-commerce',
    'Dashboards',
    'Automatización de procesos',
    'Sistemas de gestión',
    'Integraciones',
    'Pasarelas de pago',
  ]

  const clientTypes = [
    'Empresas en crecimiento',
    'Negocios que necesitan digitalizar procesos',
    'Emprendedores que validan productos',
    'Equipos que necesitan escalar software',
  ]

  const process = [
    { step: '01', title: 'Entender el problema', description: 'Analizo el proceso actual y dónde está la fricción.' },
    { step: '02', title: 'Diseñar la solución', description: 'Defino arquitectura y alcance antes de escribir código.' },
    { step: '03', title: 'Construir e iterar', description: 'Desarrollo en ciclos cortos con feedback constante.' },
    { step: '04', title: 'Lanzar y mantener', description: 'Despliego a producción y acompaño el crecimiento.' },
  ]

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
                  Transformo procesos complejos en software simple.
                </h1>
                <p className="text-lg text-muted max-w-xl">
                  Desarrollo aplicaciones web que automatizan operaciones, optimizan flujos de trabajo y ayudan a las empresas a escalar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/casos-de-exito" className="btn-primary inline-flex items-center justify-center gap-2 group">
                  Ver proyectos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contacto" className="btn-secondary inline-flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Hablemos
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-surface px-4 py-5 text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="rounded-xl border border-border bg-surface p-3">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="/retrato.jpg"
                    alt="Edisson Toloza"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trust line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-muted mt-16 text-center"
          >
            Proyectos desarrollados para servicios, e-commerce y gestión interna.
          </motion.p>
        </div>
      </section>

      {/* Por qué trabajar conmigo */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="eyebrow">Por qué trabajar conmigo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mt-3">
              Confianza desde el primer día
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de éxito */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="eyebrow">Casos de éxito</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mt-3">
              Resultados, no solo código
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} isClickable={true} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link to="/casos-de-exito" className="inline-flex items-center text-sm text-accent hover:text-accent-hover transition-colors group">
              Ver todos los casos
              <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lo que puedo construir */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="eyebrow">Lo que puedo construir</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mt-3">
              Soluciones, no tecnologías
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {solutions.map((solution) => (
              <span key={solution} className="tech-pill">
                {solution}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Con quién trabajo */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="eyebrow">Con quién trabajo</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mt-3">
              ¿Es esto para vos?
            </h2>
          </motion.div>

          <ul className="space-y-3 max-w-xl">
            {clientTypes.map((type, index) => (
              <motion.li
                key={type}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-foreground"
              >
                <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                {type}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="eyebrow">Cómo trabajo</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mt-3">
              Un proceso simple y predecible
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="text-sm font-semibold text-accent mb-3">{item.step}</div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding border-t border-border">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-surface px-6 py-16 text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              ¿Tenés un proceso que podría funcionar mejor?
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Hablemos sobre cómo convertirlo en software.
            </p>
            <Link to="/contacto" className="btn-primary inline-flex items-center justify-center gap-2 group">
              Agendar reunión
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
