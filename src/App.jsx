import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import Footer from './components/layout/Footer/Footer.jsx'
import Header from './components/layout/Header/Header.jsx'
import WhatsApp from './components/layout/WhatsApp/WhatsApp.jsx'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Contact from './pages/Contact.jsx'

/**
 * RouteScrollHandler — Smoothly handles scrolling on route changes
 * and hash navigation (e.g. `/#services` or `/#business-setup`).
 */
function RouteScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteScrollHandler />
      <ReactLenis root>
        {/* Header overlays the hero banner and scrolls with the page. */}
        <Header />
        <div className="btPageWrap">
          <div className="btContentWrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
        <WhatsApp />
      </ReactLenis>
    </BrowserRouter>
  )
}
