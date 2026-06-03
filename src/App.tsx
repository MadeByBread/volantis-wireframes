import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Product from './pages/Product'
import Technology from './pages/Technology'
import About from './pages/About'
import Faqs from './pages/Faqs'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Intake from './pages/Intake'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/intake" element={<Intake />} />
      </Routes>
    </Layout>
  )
}

export default App
