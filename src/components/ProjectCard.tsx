import { motion } from 'framer-motion'
import { ExternalLink, Github, Calendar, User } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
  client: string
  date: string
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card group cursor-pointer"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <div className="aspect-video bg-gradient-to-br from-primary-600/20 to-primary-800/20 flex items-center justify-center">
          <img 
            src={project.image} 
            alt={`Vista previa de ${project.title}`}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              // Fallback si la imagen no carga
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="text-center space-y-2 hidden">
            <div className="w-16 h-16 bg-primary-600 rounded-lg mx-auto flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm text-gray-400">Vista previa</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
            aria-label={`Ver ${project.title} en vivo`}
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors"
            aria-label={`Ver código de ${project.title}`}
          >
            <Github className="w-5 h-5 text-white" />
          </a>
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
        <div className="flex space-x-3 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
          >
            Ver Proyecto
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-dark-600 hover:border-primary-500 text-gray-300 hover:text-primary-400 rounded-lg text-sm font-medium transition-colors"
          >
            Código
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
