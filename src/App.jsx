import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import RouteScrollTop from './components/RouteScrollTop'
import Analytics from './components/Analytics'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Careers from './pages/Careers'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#11181f] text-white">
      <Header />
      <RouteScrollTop />
      <Analytics />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App


