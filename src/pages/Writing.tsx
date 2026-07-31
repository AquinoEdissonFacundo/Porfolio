import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { articles } from '../data/articles'

const Writing = () => {
  return (
    <>
      <Helmet>
        <title>Escritos — Edisson Toloza</title>
        <meta name="description" content="Notas sobre construir software: decisiones de arquitectura y aprendizajes de los proyectos que desarrollo." />
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
              <span className="eyebrow">Escritos</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-3">
                Notas sobre construir software
              </h1>
              <p className="text-lg text-muted mt-4">
                Decisiones de arquitectura y aprendizajes de los proyectos que desarrollo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Artículos */}
        <section className="section-padding border-t border-border">
          <div className="container-max">
            <div className="max-w-2xl divide-y divide-border">
              {articles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/escritos/${article.slug}`} className="block py-8 group">
                    <div className="text-xs text-muted mb-2">
                      {article.date} · {article.readTime} de lectura
                    </div>
                    <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-muted mt-2">{article.excerpt}</p>
                    <span className="inline-flex items-center text-sm text-accent mt-3 group-hover:text-accent-hover transition-colors">
                      Leer
                      <ArrowRight className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Writing
