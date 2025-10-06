import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
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
        <title>Edisson Facundo Aquino Toloza - Desarrollador Full-Stack</title>
        <meta name="description" content="Desarrollador Full Stack con experiencia en la creación de aplicaciones web eficientes y escalables. Me enfoco en resolver problemas reales mediante código limpio y experiencias de usuario optimizadas. He trabajado en proyectos para un centro terapéutico en Nordelta y una mueblería en Tigre, siempre adaptándome a los objetivos del negocio y mejorando continuamente mis habilidades." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Edisson Facundo Aquino Toloza",
            "jobTitle": "Desarrollador Full-Stack",
            "description": "Desarrollador Full-Stack especializado en React, Node.js y PostgreSQL",
            "url": "https://portfolio-one-delta-75.vercel.app/",
            "email": "aquinoedissonfacundo@gmail.com",
            "telephone": "+54911605658519",
            "sameAs": [
              "https://github.com/AquinoEdissonFacundo",
              "https://www.linkedin.com/in/facundo-toloza/"
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
      
      <div className="min-h-screen bg-dark-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
