import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
  isClickable?: boolean
}

const ProjectCard = ({ project, isClickable = false }: ProjectCardProps) => {
  const CardContent = () => (
    <motion.div className="bg-surface border border-border rounded-xl overflow-hidden shadow-card hover:border-muted transition-colors duration-300 group">
      {/* Project Image */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`Vista previa de ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Project Info */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="text-xs text-muted">
          {project.client} · {project.date}
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2">
          {project.highlights.map((highlight) => (
            <span key={highlight} className="tech-pill text-xs">
              {highlight}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="pt-2">
          {isClickable ? (
            <span className="inline-flex items-center text-sm text-accent group-hover:text-accent-hover transition-colors">
              Ver case study
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </span>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-accent hover:text-accent-hover transition-colors"
            >
              Ver proyecto
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (isClickable) {
    return (
      <Link to={`/casos-de-exito/${project.slug}`} className="block">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}

export default ProjectCard
