import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, User, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  featured: boolean
  client: string
  date: string
}

interface ProjectCardProps {
  project: Project
  isClickable?: boolean
}

const ProjectCard = ({ project, isClickable = false }: ProjectCardProps) => {
  const CardContent = () => (
    <motion.div
      whileHover={{ y: -5 }}
      className="card group cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <div className="aspect-video bg-gradient-to-br from-primary-600/20 to-primary-800/20">
          <img 
            src={project.image} 
            alt={`Vista previa de ${project.title}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback si la imagen no carga
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center">
                    <div class="text-center space-y-2">
                      <div class="w-16 h-16 bg-primary-600 rounded-lg mx-auto flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </div>
                      <p class="text-sm text-gray-400">Vista previa</p>
                    </div>
                  </div>
                `;
              }
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          {isClickable ? (
            <div className="p-3 bg-primary-600 rounded-lg">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
              aria-label={`Ver ${project.title} en vivo`}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Meta */}
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{project.date}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-center pt-2">
          {isClickable ? (
            <div className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium text-center flex items-center justify-center">
              Ver Detalles
              <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
            >
              Ver Proyecto
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (isClickable) {
    return (
      <Link to="/proyectos" className="block">
        <CardContent />
      </Link>
    )
  }

  return <CardContent />
}

export default ProjectCard
