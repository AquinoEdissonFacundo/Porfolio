import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, User, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AviDelta.online',
      description: 'Sitio web completo para centro de masajes en Nordelta y Tigre. Desarrollado con enfoque en conversión por WhatsApp y SEO local para atraer clientes de la zona. (Proyecto completado - dominio no renovado)',
      longDescription: 'Proyecto completo para centro de masajes terapéuticos en Nordelta. Implementé un diseño responsive y optimizado para móviles, ya que la mayoría de los clientes buscan servicios de masajes desde sus teléfonos. El sitio incluye información detallada sobre servicios, precios, ubicación y un sistema de contacto directo por WhatsApp.',
      image: './ProyectoAvi.png',
      technologies: ['React 18', 'Sass', 'SEO Local', 'JSON-LD', 'Open Graph'],
      liveUrl: 'https://avi-chi.vercel.app/',
      client: 'Cliente real - Nordelta, Tigre',
      date: 'Enero 2024',
      features: [
        'Diseño responsive optimizado para móviles',
        'SEO local con JSON-LD LocalBusiness',
        'Metadatos Open Graph para redes sociales',
        'Optimización de performance con imágenes WebP',
        'Sistema de contacto directo por WhatsApp',
        'Navegación intuitiva y accesible'
      ],
      challenges: [
        'Optimizar para dispositivos móviles (principal audiencia)',
        'Implementar SEO local efectivo para competir con centros establecidos',
        'Crear un flujo de conversión claro hacia WhatsApp'
      ],
      results: [
        'Sitio web profesional y funcional',
        'Mejora en la presencia online del negocio',
        'Interfaz optimizada para la audiencia objetivo'
      ]
    },
    {
      id: 2,
      title: 'StronMuebles.com',
      description: 'Catálogo de mueblería con integración a WordPress para gestión de productos. Incluye sistema de rutas personalizado y sitemap automático para SEO.',
      longDescription: 'E-commerce completo para mueblería en Tigre. Desarrollé un sistema de catálogo dinámico que se conecta con WordPress para la gestión de productos, permitiendo al cliente actualizar inventario fácilmente. Implementé un sistema de rutas personalizado sin usar React Router para mayor control sobre la navegación y SEO.',
      image: './ProyectoMuebleria.png',
      technologies: ['React 18', 'TypeScript', 'WordPress REST API', 'Sitemap', 'Context API'],
      liveUrl: 'https://stronmuebles.com',
      client: 'Cliente real - Tigre',
      date: 'Septiembre 2025',
      features: [
        'Catálogo dinámico con integración WordPress',
        'Sistema de rutas con history.pushState',
        'URLs amigables para productos (/producto/slug)',
        'Carrito de compras con Context API',
        'Sitemap automático para SEO',
        'Gestión de estado con TypeScript'
      ],
      challenges: [
        'Integrar React con WordPress REST API',
        'Implementar sistema de rutas sin React Router',
        'Crear URLs amigables para productos',
        'Manejar estado complejo del carrito de compras'
      ],
      results: [
        'Sistema de gestión de productos automatizado',
        'Navegación fluida y SEO-friendly',
        'Experiencia de usuario optimizada para e-commerce'
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Proyectos - Edisson Facundo Aquino Toloza</title>
        <meta name="description" content="Proyectos reales desarrollados para clientes locales. AviDelta.online (centro de masajes) y StronMuebles.com (mueblería) con React, Node.js y tecnologías modernas." />
      </Helmet>

      <div className="pt-16">
        {/* Header */}
        <section className="section-padding bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <Link 
                to="/" 
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Volver al Inicio
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Mis <span className="gradient-text">Proyectos</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Trabajos reales para clientes locales, demostrando habilidades técnicas 
                y capacidad de entrega en proyectos del mundo real.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding">
          <div className="container-max">
            <div className="space-y-16">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary-600/20 to-primary-800/20 aspect-video">
                      <img 
                        src={project.image} 
                        alt={`Vista previa de ${project.title}`}
                        className="w-full h-full object-cover"
                        onLoad={() => console.log('Imagen cargada:', project.image)}
                        onError={(e) => {
                          console.error('Error cargando imagen:', project.image, e);
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="absolute inset-0 flex items-center justify-center">
                                <div class="text-center space-y-4">
                                  <div class="w-20 h-20 bg-primary-600 rounded-xl mx-auto flex items-center justify-center">
                                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                    </svg>
                                  </div>
                                  <p class="text-gray-400">Vista previa del proyecto</p>
                                  <p class="text-red-400 text-xs">Error: ${project.image}</p>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{project.client}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-3xl font-bold text-white mb-4">
                        {project.title}
                      </h2>
                      
                      <p className="text-lg text-gray-300 mb-4">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Tecnologías</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary-600/20 text-primary-400 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">Características Principales</h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center group"
                      >
                        Ver Proyecto
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="container-max text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                ¿Te interesa mi perfil?
              </h2>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Estoy listo para aportar estas habilidades a tu equipo y seguir creciendo profesionalmente.
              </p>
              <Link 
                to="/contacto" 
                className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center group"
              >
                Contactar Ahora
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Projects
