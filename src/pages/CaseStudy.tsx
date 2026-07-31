import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getProjectBySlug } from '../data/projects'

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/casos-de-exito" replace />
  }

  return (
    <>
      <Helmet>
        <title>{project.title} — Edisson Toloza</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="pt-16">
        <section className="section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <Link
                to="/casos-de-exito"
                className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Casos de éxito
              </Link>
              <div className="text-xs text-muted mb-3">
                {project.client} · {project.date}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-muted mt-4">{project.description}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding border-t border-border">
          <div className="container-max space-y-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border bg-surface overflow-hidden aspect-video"
            >
              <img
                src={project.image}
                alt={`Vista previa de ${project.title}`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-border bg-surface px-4 py-3">
                  <div className="text-xl font-bold text-foreground">{metric.value}</div>
                  <div className="text-xs text-muted mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
              <div className="space-y-12">
                <div>
                  <span className="eyebrow">Problema</span>
                  <p className="text-foreground text-lg mt-3">{project.problem}</p>
                </div>

                <div>
                  <span className="eyebrow">Investigación</span>
                  <p className="text-muted mt-3">{project.research}</p>
                </div>

                <div>
                  <span className="eyebrow">Decisiones técnicas</span>
                  <div className="space-y-6 mt-4">
                    {project.decisions.map((decision) => (
                      <div key={decision.question}>
                        <h3 className="text-foreground font-semibold">{decision.question}</h3>
                        <p className="text-muted mt-1.5">{decision.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="eyebrow">Solución</span>
                  <p className="text-muted mt-3">{project.solution}</p>
                  <ul className="space-y-2 mt-4">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="eyebrow">Resultado</span>
                  <ul className="space-y-2 mt-4">
                    {project.results.map((result) => (
                      <li key={result} className="flex items-start gap-2 text-sm text-muted">
                        <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="eyebrow">Aprendizajes</span>
                  <ul className="space-y-3 mt-4">
                    {project.learnings.map((learning) => (
                      <li key={learning} className="text-muted">{learning}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="card">
                  <span className="eyebrow">Stack</span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-pill text-xs">{tech}</span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  Ver proyecto en vivo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

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
                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default CaseStudy
