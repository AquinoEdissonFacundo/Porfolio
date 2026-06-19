import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, User, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Projects = () => {
  const projects = [
    {
      id: 3,
      title: 'Studio Suite',
      description: 'SaaS + CRM multi-tenant para centros de belleza: turnos, clientes, pagos y staff en una sola plataforma. Reservas online con seña obligatoria vía Mercado Pago (OAuth por tenant), recordatorios automáticos con Inngest y métricas en tiempo real.',
      longDescription: 'Plataforma SaaS construida para resolver un problema real: Valentina, dueña de un estudio de uñas en Palermo, perdía plata por no-shows y administraba todo por WhatsApp. Cada estudio tiene su propio tenant aislado con agenda visual (día/semana), CRM de clientes con historial y gasto total, gestión de staff con roles diferenciados y portal de booking público. Las clientas reservan 24/7 y dejan una seña directamente en la cuenta de Mercado Pago del estudio (OAuth por tenant, sin intermediarios). Inngest maneja los recordatorios T-72h, T-24h y T-2h con reintentos automáticos. La disponibilidad de slots se cachea en Upstash Redis y la inserción de turnos usa SELECT FOR UPDATE + constraint GIST en PostgreSQL para prevenir race conditions.',
      image: './studioSuite.png',
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'PostgreSQL (Neon)', 'Drizzle ORM', 'Mercado Pago OAuth', 'Inngest', 'Upstash Redis', 'Better Auth', 'Resend', 'Vercel'],
      liveUrl: 'https://studio-suite-lac.vercel.app/',
      client: 'Producto propio (SaaS)',
      date: 'Junio 2026',
      features: [
        'Arquitectura multi-tenant con row-level isolation por studioId',
        'Booking público 24/7 con seña obligatoria vía Mercado Pago',
        'OAuth de MP por tenant: el dinero va directo al dueño del estudio',
        'Agenda visual día/semana con drag & drop para reprogramar',
        'Recordatorios automáticos T-72h, T-24h y T-2h con Inngest',
        'CRM de clientes: historial de visitas, gasto total y preferencias',
        'Roles por tenant: owner, admin, recepcionista y staff con agenda propia',
        'Panel de métricas: ingresos, servicios más pedidos y profesionales top',
        'Prevención de race conditions con SELECT FOR UPDATE + constraint GIST'
      ],
      challenges: [
        'Diseñar multi-tenancy seguro: el tenant se resuelve desde la URL, nunca del cliente',
        'Integrar Mercado Pago OAuth por tenant con validación HMAC en webhooks',
        'Prevenir reservas duplicadas bajo concurrencia con bloqueos a nivel DB',
        'Garantizar ejecución confiable de recordatorios con Inngest y reintentos'
      ],
      results: [
        'Producto SaaS funcional desplegado en producción en Vercel',
        'Elimina no-shows con seña obligatoria al reservar',
        'Reemplaza WhatsApp + libreta por agenda digital con métricas reales',
        'Flujo completo: booking → pago → confirmación → recordatorios automáticos'
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

  // Efecto para scroll suave cuando se navega a un proyecto específico
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Proyectos - Edisson Facundo Aquino Toloza</title>
        <meta name="description" content="Proyectos reales: Studio Suite (SaaS para centros de belleza), AviDelta.online (centro de masajes) y StronMuebles.com (mueblería), desarrollados con Next.js, React, TypeScript y tecnologías modernas." />
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
                  id={`project-${project.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center scroll-mt-32"
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
