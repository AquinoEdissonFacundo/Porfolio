import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const About = () => {
  const philosophy = [
    {
      title: 'El código es un medio, el negocio es el fin',
      description: 'Cada línea que escribo busca resolver un problema real, no lucirse.'
    },
    {
      title: 'Simple por fuera, sólido por dentro',
      description: 'Interfaces claras respaldadas por arquitecturas pensadas para durar.'
    },
    {
      title: 'Cada entrega funciona en producción',
      description: 'No entrego demos. Entrego software que opera de verdad.'
    }
  ]

  const expectations = [
    'Comunicación clara',
    'Entregas iterativas',
    'Código mantenible',
    'Sin sorpresas',
    'Pensado para crecer',
  ]

  const timeline = [
    { year: '2024', description: 'Comienzo como desarrollador.' },
    { year: '2025', description: 'StronMuebles.com, mi primer proyecto en producción para un cliente real.' },
    { year: '2026', description: 'Studio Suite, mi primer SaaS: un producto propio de principio a fin.' },
    { year: 'Hoy', description: 'Construyendo soluciones para empresas.' },
  ]

  const technologies = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'Better Auth'] },
    { category: 'Infraestructura', items: ['Inngest', 'Upstash Redis', 'Resend', 'Sentry'] },
    { category: 'Deploy', items: ['Vercel', 'Railway', 'Supabase', 'Hostinger'] },
  ]

  return (
    <>
      <Helmet>
        <title>Cómo trabajo — Edisson Toloza</title>
        <meta name="description" content="Filosofía de trabajo, proceso y experiencia de Edisson Toloza desarrollando software para empresas." />
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
              <span className="eyebrow">Cómo trabajo</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-3">
                Un proceso claro, pensado para tu negocio
              </h1>
              <p className="text-lg text-muted mt-4">
                Antes de escribir código, entiendo el problema. Así trabajo en cada proyecto.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filosofía */}
        <section className="section-padding border-t border-border">
          <div className="container-max">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {philosophy.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Qué podés esperar */}
        <section className="section-padding border-t border-border">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="eyebrow">Qué podés esperar</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mt-3">
                Trabajar conmigo, en concreto
              </h2>
            </motion.div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {expectations.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quién está detrás */}
        <section className="section-padding border-t border-border">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 space-y-4"
              >
                <span className="eyebrow">Quién está detrás</span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  Edisson Toloza
                </h2>
                <div className="space-y-4 text-muted">
                  <p>
                    Desarrollo software para empresas y emprendedores que necesitan
                    digitalizar procesos: desde reservas y pagos hasta catálogos y
                    paneles de gestión.
                  </p>
                  <p>
                    Construí Studio Suite, un SaaS multi-tenant para centros de belleza
                    con pagos integrados y arquitectura serverless, y desarrollé
                    StronMuebles.com para un cliente real en Tigre.
                  </p>
                  <p>
                    Trabajo despliegues en Vercel, Railway y Hostinger, con dominios,
                    SSL y pipelines de CI/CD para automatizar cada entrega.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
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
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding border-t border-border">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="eyebrow">Trayectoria</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mt-3">
                Un recorrido breve
              </h2>
            </motion.div>

            <div className="relative max-w-xl">
              <div className="absolute left-[3px] top-2 bottom-2 w-px bg-border" />
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8"
                  >
                    <span
                      className={`absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full ${
                        index === timeline.length - 1 ? 'bg-accent' : 'bg-border'
                      }`}
                    />
                    <span className="eyebrow">{item.year}</span>
                    <p className="text-foreground mt-1">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tecnologías */}
        <section className="section-padding border-t border-border">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <span className="eyebrow">Tecnologías</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xs uppercase tracking-widest text-muted">{group.category}</span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {group.items.map((tech) => (
                      <span key={tech} className="tech-pill text-xs">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
              <Link
                to="/contacto"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                Agendar reunión
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
