export interface ArticleSection {
  heading: string
  paragraphs: string[]
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  relatedProjectSlug?: string
  sections: ArticleSection[]
}

export const articles: Article[] = [
  {
    slug: 'aislamiento-multi-tenant-studio-suite',
    title: 'Cómo diseñé el aislamiento multi-tenant de Studio Suite',
    excerpt: 'Por qué el tenant se resuelve siempre desde la URL y nunca desde un dato que envía el cliente, y cómo eso cambia el diseño de cada endpoint.',
    date: 'Junio 2026',
    readTime: '5 min',
    relatedProjectSlug: 'studio-suite',
    sections: [
      {
        heading: 'El problema de confiar en el cliente',
        paragraphs: [
          'Studio Suite es un SaaS: cada estudio de belleza que lo usa es un tenant distinto, con sus propios turnos, clientas y pagos. La primera decisión de arquitectura, antes de cualquier línea de UI, fue cómo aislar los datos de un tenant para que fuera imposible ver o modificar los de otro.',
          'La opción más simple —y más peligrosa— es que el tenant viaje como un campo más en el body del request o en el estado del cliente. El problema es que cualquier dato que envía el cliente se puede manipular. Si el aislamiento depende de eso, alcanza con cambiar un ID en el payload para intentar acceder a datos ajenos.',
        ],
      },
      {
        heading: 'Resolver el tenant en el servidor, siempre',
        paragraphs: [
          'La regla que terminé aplicando en todo el proyecto: el tenant se resuelve en el servidor a partir de la URL o del subdominio, nunca de un dato que el cliente controla. Cada request llega, el servidor identifica a qué estudio pertenece, y recién ahí se autoriza la operación.',
          'En la práctica esto significa que cada query a la base de datos incluye el studioId resuelto del lado del servidor, no el que "dice" el cliente. Es una regla simple, pero hay que aplicarla en cada endpoint sin excepciones — un solo lugar donde se confíe en el cliente rompe todo el modelo.',
        ],
      },
      {
        heading: 'Lo que aprendí',
        paragraphs: [
          'La parte más difícil de construir Studio Suite no fue la agenda ni los pagos, fue diseñar el aislamiento multi-tenant para que fuera imposible de romper por error humano — ni siquiera por un descuido mío en un endpoint nuevo. Cuando la seguridad depende de "acordarse de validar" en cada lugar, tarde o temprano alguien se olvida.',
        ],
      },
    ],
  },
  {
    slug: 'wordpress-headless-stronmuebles',
    title: 'Por qué elegí WordPress headless para StronMuebles',
    excerpt: 'El cliente ya sabía usar WordPress. Construir un panel de administración propio hubiera sido resolver un problema que no existía.',
    date: 'Septiembre 2025',
    readTime: '4 min',
    relatedProjectSlug: 'stronmuebles',
    sections: [
      {
        heading: 'La tentación de construir todo desde cero',
        paragraphs: [
          'Cuando empecé StronMuebles.com, la primera idea fue armar un panel de administración propio para que el cliente cargara sus productos: nombre, precio, fotos, stock. Es el camino "más prolijo" desde el punto de vista técnico. También era, en este caso, la decisión equivocada.',
        ],
      },
      {
        heading: 'Usar la herramienta que el cliente ya conoce',
        paragraphs: [
          'El cliente ya administraba otros negocios familiares con WordPress. No necesitaba aprender una herramienta nueva, necesitaba seguir haciendo lo que ya sabía hacer. Así que la arquitectura terminó siendo WordPress headless: el catálogo se administra desde el WP-Admin de siempre, y el sitio público consume esos datos vía REST API con React.',
          'Esto significa que cada vez que el cliente agrega un mueble o cambia un precio, no depende de mí. No hay tickets de "necesito que subas este producto" — el catálogo se actualiza solo.',
        ],
      },
      {
        heading: 'El resto del stack, con el mismo criterio',
        paragraphs: [
          'El sistema de rutas también fue una decisión deliberada: en vez de React Router, un sistema propio con URLs amigables por producto, pensado desde el día uno para SEO — el sitemap se genera automáticamente a partir del catálogo.',
          'Lo que aprendí acá es que la herramienta "correcta" no es la más sofisticada técnicamente, es la que reduce la fricción real del negocio. Usar WordPress no fue una limitación, fue la decisión que hizo que el proyecto fuera sostenible para el cliente después de la entrega.',
        ],
      },
    ],
  },
]

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug)
