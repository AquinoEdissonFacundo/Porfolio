export interface ProjectDecision {
  question: string
  answer: string
}

export interface Project {
  id: number
  slug: string
  title: string
  client: string
  date: string
  image: string
  liveUrl: string
  description: string
  metrics: { value: string; label: string }[]
  highlights: string[]
  problem: string
  research: string
  decisions: ProjectDecision[]
  solution: string
  features: string[]
  results: string[]
  learnings: string[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    id: 3,
    slug: 'studio-suite',
    title: 'Studio Suite',
    client: 'Producto propio (SaaS)',
    date: 'Junio 2026',
    image: '/studioSuite.png',
    liveUrl: 'https://studio-suite-lac.vercel.app/',
    description: 'SaaS + CRM multi-tenant para centros de belleza: turnos, clientes, pagos y staff. Reservas online 24/7 con seña obligatoria vía Mercado Pago OAuth.',
    metrics: [
      { value: '24/7', label: 'Reservas automatizadas' },
      { value: 'MP', label: 'Pagos integrados' },
      { value: 'Multi', label: 'Tenant' },
    ],
    highlights: ['Multi-tenant', 'Mercado Pago OAuth', 'Next.js 16', 'Agenda en tiempo real'],
    problem: 'Un estudio de belleza perdía ingresos por ausencias y administraba turnos, clientes y pagos por WhatsApp.',
    research: 'Antes de escribir código evalué cómo estudios similares manejaban reservas y pagos: la mayoría dependía de WhatsApp o planillas, sin garantía de cobro ni recordatorios automáticos. El punto de fricción real no era la agenda — era que nadie pagaba una seña hasta último momento y las canceladas quedaban sin cubrir.',
    decisions: [
      {
        question: '¿Por qué resolver el tenant desde la URL y no desde el cliente?',
        answer: 'Para que el aislamiento multi-tenant no dependa de un dato que el cliente podría manipular — el servidor siempre determina a qué estudio pertenece cada request.'
      },
      {
        question: '¿Por qué Mercado Pago OAuth por tenant en vez de una cuenta centralizada?',
        answer: 'Para que el dinero de cada seña vaya directo a la cuenta del estudio, sin intermediar pagos ni asumir responsabilidad sobre fondos de terceros.'
      },
      {
        question: '¿Por qué SELECT FOR UPDATE + constraint GIST en vez de optimistic locking?',
        answer: 'Para prevenir reservas duplicadas bajo concurrencia a nivel de base de datos, no de aplicación — más robusto cuando dos clientas reservan el mismo horario al mismo tiempo.'
      },
      {
        question: '¿Por qué Inngest para los recordatorios en vez de un cron propio?',
        answer: 'Para tener reintentos automáticos y observabilidad sin mantener infraestructura de colas propia.'
      },
    ],
    solution: 'Plataforma SaaS multi-tenant con agenda visual, CRM de clientes, booking público 24/7 con seña obligatoria vía Mercado Pago OAuth por tenant, y recordatorios automáticos con Inngest.',
    features: [
      'Arquitectura multi-tenant con aislamiento por studioId',
      'Booking público con seña obligatoria vía Mercado Pago',
      'Agenda visual día/semana por profesional',
      'Recordatorios automáticos T-72h, T-24h y T-2h',
      'CRM con historial de visitas y gasto total',
      'Panel de métricas de ingresos y servicios',
    ],
    results: [
      'Producto SaaS funcional en producción',
      'Elimina ausencias con seña obligatoria al reservar',
      'Reemplaza WhatsApp y libreta por agenda digital',
    ],
    learnings: [
      'La parte más difícil no fue la agenda, fue diseñar el aislamiento multi-tenant para que fuera imposible de romper por error humano.',
      'Integrar pagos reales cambia el nivel de exigencia: cada webhook necesita validación e idempotencia, no solo un "happy path".',
    ],
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Mercado Pago', 'Inngest', 'Redis', 'Better Auth'],
  },
  {
    id: 2,
    slug: 'stronmuebles',
    title: 'StronMuebles.com',
    client: 'Cliente real — Tigre',
    date: 'Septiembre 2025',
    image: '/ProyectoMuebleria.png',
    liveUrl: 'https://stronmuebles.com',
    description: 'Catálogo de mueblería con integración WordPress y sistema de rutas personalizado.',
    metrics: [
      { value: '100%', label: 'Catálogo autoadministrable' },
      { value: 'SEO', label: 'Sitemap automático' },
    ],
    highlights: ['WordPress headless', 'SEO', 'Catálogo autoadministrable'],
    problem: 'Una mueblería en Tigre necesitaba un catálogo online que su equipo pudiera actualizar sin depender de un desarrollador.',
    research: 'Evalué armar un panel de administración propio contra usar un CMS existente. El cliente ya conocía WordPress de otros negocios familiares, así que la curva de aprendizaje de un panel custom no se justificaba frente a reutilizar una herramienta que ya sabían usar.',
    decisions: [
      {
        question: '¿Por qué WordPress headless en vez de un panel propio?',
        answer: 'Para que el cliente administre su catálogo sin depender de un desarrollador para cada cambio de producto o precio.'
      },
      {
        question: '¿Por qué un sistema de rutas propio en vez de React Router?',
        answer: 'Para tener control total sobre URLs amigables y el sitemap de cada producto, clave para el SEO del catálogo.'
      },
      {
        question: '¿Por qué Context API y no una librería de estado externa?',
        answer: 'El alcance del carrito era acotado y no justificaba sumar una dependencia adicional al bundle.'
      },
    ],
    solution: 'E-commerce con catálogo dinámico conectado a WordPress para la gestión de productos, con sistema de rutas propio y URLs amigables para SEO.',
    features: [
      'Catálogo dinámico integrado con WordPress REST API',
      'Sistema de rutas propio con URLs amigables',
      'Carrito de compras con Context API',
      'Sitemap automático para SEO',
    ],
    results: [
      'Gestión de productos autónoma para el cliente',
      'Navegación fluida y optimizada para buscadores',
    ],
    learnings: [
      'Usar la herramienta que el cliente ya conoce (WordPress) redujo la fricción de entrega mucho más que construir algo "mejor" técnicamente.',
      'Las URLs amigables y el sitemap automático importan más de lo que parece cuando el negocio depende de tráfico orgánico.',
    ],
    technologies: ['React 18', 'TypeScript', 'WordPress REST API', 'Context API'],
  },
]

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug)
