import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
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

        {/* Projects grid */}
        <section className="section-padding border-t border-border">
          <div className="container-max">
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
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects
