import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const Projects = () => {
  const projects = [
    {
      id: 3,
      title: 'Studio Suite',
      client: 'Producto propio (SaaS)',
      date: 'Junio 2026',
      image: './studioSuite.png',
      liveUrl: 'https://studio-suite-lac.vercel.app/',
      metrics: [
        { value: '24/7', label: 'Reservas automatizadas' },
        { value: 'MP', label: 'Pagos integrados' },
        { value: 'Multi', label: 'Tenant' },
      ],
      problem: 'Un estudio de belleza perdía ingresos por ausencias y administraba turnos, clientes y pagos por WhatsApp.',
      solution: 'Plataforma SaaS multi-tenant con agenda visual, CRM de clientes, booking público 24/7 con seña obligatoria vía Mercado Pago OAuth por tenant, y recordatorios automáticos con Inngest.',
      features: [
        'Arquitectura multi-tenant con aislamiento por studioId',
        'Booking público con seña obligatoria vía Mercado Pago',
        'Agenda visual día/semana por profesional',
        'Recordatorios automáticos T-72h, T-24h y T-2h',
        'CRM con historial de visitas y gasto total',
        'Panel de métricas de ingresos y servicios',
      ],
      results: [
        'Producto SaaS funcional en producción',
        'Elimina ausencias con seña obligatoria al reservar',
        'Reemplaza WhatsApp y libreta por agenda digital',
      ],
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Mercado Pago', 'Inngest', 'Redis', 'Better Auth'],
    },
    {
      id: 2,
      title: 'StronMuebles.com',
      client: 'Cliente real — Tigre',
      date: 'Septiembre 2025',
      image: './ProyectoMuebleria.png',
      liveUrl: 'https://stronmuebles.com',
      metrics: [
        { value: '100%', label: 'Catálogo autoadministrable' },
        { value: 'SEO', label: 'Sitemap automático' },
      ],
      problem: 'Una mueblería en Tigre necesitaba un catálogo online que su equipo pudiera actualizar sin depender de un desarrollador.',
      solution: 'E-commerce con catálogo dinámico conectado a WordPress para la gestión de productos, con sistema de rutas propio y URLs amigables para SEO.',
      features: [
        'Catálogo dinámico integrado con WordPress REST API',
        'Sistema de rutas propio con URLs amigables',
        'Carrito de compras con Context API',
        'Sitemap automático para SEO',
      ],
      results: [
        'Gestión de productos autónoma para el cliente',
        'Navegación fluida y optimizada para buscadores',
      ],
      technologies: ['React 18', 'TypeScript', 'WordPress REST API', 'Context API'],
    }
  ]

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Casos de éxito — Edisson Toloza</title>
        <meta name="description" content="Casos reales: Studio Suite (SaaS para centros de belleza) y StronMuebles.com (mueblería), desarrollados con Next.js, React y TypeScript." />
      </Helmet>

      <div className="pt-16">
        {/* Header */}
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="eyebrow">Casos de éxito</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-3">
                Casos de éxito
              </h1>
              <p className="text-lg text-muted mt-4">
                Cada solución nace de un problema de negocio concreto.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding border-t border-border">
          <div className="container-max space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                id={`project-${project.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="rounded-xl border border-border bg-surface overflow-hidden aspect-video">
                      <img
                        src={project.image}
                        alt={`Vista previa de ${project.title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="text-xs text-muted mb-3">
                        {project.client} · {project.date}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                        {project.title}
                      </h2>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-lg border border-border bg-surface px-4 py-3">
                          <div className="text-xl font-bold text-foreground">{metric.value}</div>
                          <div className="text-xs text-muted mt-0.5">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h3 className="eyebrow mb-2">Problema</h3>
                        <p className="text-muted">{project.problem}</p>
                      </div>
                      <div>
                        <h3 className="eyebrow mb-2">Solución</h3>
                        <p className="text-muted">{project.solution}</p>
                        <ul className="space-y-2 mt-3">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                              <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="eyebrow mb-2">Resultado</h3>
                        <ul className="space-y-2">
                          {project.results.map((result) => (
                            <li key={result} className="flex items-start gap-2 text-sm text-muted">
                              <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-pill text-xs">{tech}</span>
                      ))}
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-accent hover:text-accent-hover transition-colors"
                    >
                      Ver proyecto
                      <ExternalLink className="ml-1.5 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects
