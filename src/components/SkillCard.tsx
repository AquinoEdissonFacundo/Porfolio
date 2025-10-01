import { motion } from 'framer-motion'

interface Skill {
  category: string
  icon: React.ReactNode
  technologies: string[]
}

interface SkillCardProps {
  skill: Skill
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="card group"
    >
      <div className="space-y-4">
        {/* Icon and Title */}
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
            <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
              {skill.icon}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
            {skill.category}
          </h3>
        </div>

        {/* Technologies */}
        <div className="space-y-2">
          {skill.technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
              <span className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SkillCard
