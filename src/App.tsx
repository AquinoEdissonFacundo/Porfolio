import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import CaseStudy from './pages/CaseStudy'
import Writing from './pages/Writing'
import Article from './pages/Article'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <Helmet>
        <title>Edisson Toloza — Software para hacer crecer tu negocio</title>
        <meta name="description" content="Desarrollo software que automatiza operaciones, optimiza flujos de trabajo y ayuda a las empresas a escalar. Casos reales: SaaS multi-tenant con pagos integrados y e-commerce para clientes locales." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Edisson Facundo Aquino Toloza",
            "jobTitle": "Desarrollador de software",
            "description": "Desarrollo aplicaciones web que automatizan procesos y ayudan a las empresas a escalar.",
            "url": "https://portfolio-one-delta-75.vercel.app/",
            "email": "aquinoedissonfacundo@gmail.com",
            "telephone": "+54911605658519",
            "sameAs": [
              "https://github.com/AquinoEdissonFacundo",
              "https://www.linkedin.com/in/facundo-toloza-desarrollador-web/"
            ],
            "knowsAbout": [
              "JavaScript",
              "React",
              "Node.js",
              "PostgreSQL",
              "TypeScript",
              "Express"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/como-trabajo" element={<About />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/casos-de-exito" element={<Projects />} />
            <Route path="/casos-de-exito/:slug" element={<CaseStudy />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/escritos" element={<Writing />} />
            <Route path="/escritos/:slug" element={<Article />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
