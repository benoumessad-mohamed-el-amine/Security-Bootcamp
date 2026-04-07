import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MatrixRain from './components/MatrixRain'
import Home from './pages/Home'
import Modules from './pages/Modules'
import ModuleDetail from './pages/ModuleDetail'
import Tools from './pages/Tools'
import Certifications from './pages/Certifications'
import Enroll from './pages/Enroll'

export default function App() {
  return (
    <HashRouter>
      <MatrixRain />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} />
        <Route path="/modules/:id" element={<ModuleDetail />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/enroll" element={<Enroll />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}
