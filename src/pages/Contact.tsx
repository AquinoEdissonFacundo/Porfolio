import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar, Download } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser'

const CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2ktTW5FdfE7c5NUnH_7Y_dzlcaFD62ecjHXfNinq0QutVvij2iKBnYU6HuKkuvU9NtOxm5kSXb?gv=true'

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

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials not configured')
      }

      const templateParams = {
        from_name: formData.name,
        user_email: formData.email,
        reply_to: formData.email,
        message: `Asunto: ${formData.subject}\n\n${formData.message}`,
      }

      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Error sending email:', error)
      }
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      title: 'Email',
      value: 'aquinoedissonfacundo@gmail.com',
      link: 'mailto:aquinoedissonfacundo@gmail.com'
    },
    {
      icon: <Phone className="w-4 h-4" />,
      title: 'Teléfono',
      value: '+54 9 11 6056-5819',
      link: 'tel:+5491160565819'
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      title: 'Ubicación',
      value: 'Buenos Aires, Argentina',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-4 h-4" />,
      url: 'https://github.com/AquinoEdissonFacundo',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-4 h-4" />,
      url: 'https://www.linkedin.com/in/facundo-toloza-desarrollador-web/',
    }
  ]

  return (
    <>
      <Helmet>
        <title>Contacto — Edisson Toloza</title>
        <meta name="description" content="Contame sobre tu proyecto y te respondo en menos de 24 horas." />
      </Helmet>

      <div className="pt-16">
        {/* Header */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-2xl">
              <span className="eyebrow">Contacto</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mt-3">
                Hablemos
              </h1>
              <p className="text-lg text-muted mt-4">
                Contame sobre tu proyecto y te respondo en menos de 24 horas.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding border-t border-border">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm text-muted mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-muted mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-muted mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="¿En qué puedo ayudarte?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-muted mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Contame sobre tu proyecto..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-success/10 border border-success/30 rounded-lg text-success text-center text-sm">
                      Mensaje enviado correctamente. Te contactaré pronto.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-600/10 border border-red-600/30 rounded-lg text-red-400 text-center text-sm">
                      Error al enviar el mensaje. Escribime directamente a mi email.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary inline-flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="flex items-center gap-4 py-3 border-b border-border group"
                    >
                      <span className="text-muted">{info.icon}</span>
                      <div>
                        <div className="text-sm text-muted">{info.title}</div>
                        <div className="text-foreground group-hover:text-accent transition-colors">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Schedule meeting */}
                <div className="card">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    ¿Preferís hablar directamente?
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    Agendá una reunión breve para contarme sobre tu proyecto.
                  </p>
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    Agendar reunión
                  </a>
                </div>

                {/* CV */}
                <a
                  href="/CvEdissonToloza2025.pdf"
                  download
                  className="inline-flex items-center text-sm text-muted hover:text-foreground transition-colors group"
                >
                  <Download className="w-4 h-4 mr-2" />
                  ¿Preferís mi CV? Descargalo acá
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
