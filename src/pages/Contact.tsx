import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowLeft, Send, Github, Linkedin, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Configuración de EmailJS desde variables de entorno
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      
      console.log('EmailJS Config:', {
        serviceId,
        templateId,
        publicKey: publicKey ? 'Present' : 'Missing'
      })
      
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials not configured')
      }
      
      const templateParams = {
        // Variables que coinciden con tu plantilla de EmailJS
        title: formData.subject,
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: new Date().toLocaleString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      console.error('Error sending email:', error)
      console.error('Error details:', {
        serviceId: serviceId || 'Missing',
        templateId: templateId || 'Missing',
        publicKey: publicKey ? 'Present' : 'Missing',
        templateParams
      })
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'aquinoedissonfacundo@gmail.com',
      link: 'mailto:aquinoedissonfacundo@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Teléfono',
      value: '+54 9 11 6056-5819',
      link: 'tel:+5491160565819'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ubicación',
      value: 'Buenos Aires, Argentina',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/AquinoEdissonFacundo',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/facundo-toloza/',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Contacto - Edisson Facundo Aquino Toloza</title>
        <meta name="description" content="¿Buscas un desarrollador? Contacta conmigo para discutir cómo puedo aportar valor a tu equipo." />
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
                <span className="gradient-text">Contacto</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                ¿Buscas un desarrollador? Me encantaría conocer sobre la oportunidad 
                y cómo puedo aportar valor a tu equipo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Envíame un Mensaje
                  </h2>
                  <p className="text-gray-400">
                    Completa el formulario y me pondré en contacto contigo lo antes posible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                      placeholder="Cuéntame sobre tu proyecto..."
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-600/20 border border-green-600/30 rounded-lg text-green-400 text-center">
                      ¡Mensaje enviado correctamente! Te contactaré pronto.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-600/20 border border-red-600/30 rounded-lg text-red-400 text-center">
                      Error al enviar el mensaje. Por favor, inténtalo de nuevo o contáctame directamente.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Información de Contacto
                  </h2>
                  <p className="text-gray-400">
                    También puedes contactarme directamente a través de estos medios.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-4 p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors group w-full overflow-hidden"
                    >
                      <div className="p-3 bg-primary-600/20 rounded-lg group-hover:bg-primary-600/30 transition-colors">
                        <div className="text-primary-400 group-hover:text-primary-300 transition-colors">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors break-words overflow-wrap-anywhere">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    Sígueme en Redes
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-dark-800 rounded-lg hover:bg-dark-700 text-gray-400 ${social.color} transition-all group`}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Download CV */}
                <div className="p-6 bg-gradient-to-r from-primary-600/20 to-primary-800/20 rounded-lg border border-primary-600/30">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    ¿Prefieres mi CV?
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Descarga mi currículum con experiencia en proyectos reales y formación técnica completa.
                  </p>
                  <a
                    href="/CV_FacundoToloza_Mejorado.pdf"
                    download
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors group"
                  >
                    <Download className="w-4 h-4 mr-2 group-hover:translate-y-1 transition-transform" />
                    Descargar CV
                  </a>
                </div>
              </motion.div>
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
                ¿Listo para conocerme?
              </h2>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                Estoy listo para una entrevista y demostrar cómo puedo aportar valor a tu equipo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:aquinoedissonfacundo@gmail.com"
                  className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center group"
                >
                  <Mail className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Solicitar Entrevista
                </a>
                <Link 
                  to="/proyectos" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-medium transition-all inline-flex items-center justify-center"
                >
                  Ver Mis Proyectos
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
