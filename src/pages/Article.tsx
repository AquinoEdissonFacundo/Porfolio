import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getArticleBySlug } from '../data/articles'
import { getProjectBySlug } from '../data/projects'

const Article = () => {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return <Navigate to="/escritos" replace />
  }

  const relatedProject = article.relatedProjectSlug ? getProjectBySlug(article.relatedProjectSlug) : undefined

  return (
    <>
      <Helmet>
        <title>{article.title} — Edisson Toloza</title>
        <meta name="description" content={article.excerpt} />
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
                to="/escritos"
                className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Escritos
              </Link>
              <div className="text-xs text-muted mb-3">
                {article.date} · {article.readTime} de lectura
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                {article.title}
              </h1>
              <p className="text-lg text-muted mt-4">{article.excerpt}</p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding border-t border-border">
          <div className="container-max">
            <div className="max-w-2xl space-y-12">
              {article.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-xl font-semibold text-foreground mb-4">{section.heading}</h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((paragraph, idx) => (
                      <p key={idx} className="text-muted leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {relatedProject && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl mt-16"
              >
                <Link
                  to={`/casos-de-exito/${relatedProject.slug}`}
                  className="card block hover:border-muted transition-colors group"
                >
                  <span className="eyebrow">Case study relacionado</span>
                  <div className="flex items-center justify-between mt-2">
                    <h3 className="text-lg font-semibold text-foreground">{relatedProject.title}</h3>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default Article
