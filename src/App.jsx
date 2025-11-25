import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Preloader from './components/Preloader'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './pages/Pricing'

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  React.useEffect(() => {
    if (isImageLoaded) {
      // Start the timer only after the image has loaded to ensure user sees the full loader
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isImageLoaded]);

  return (
    <>
      <Preloader isLoading={isLoading} onImageLoaded={() => setIsImageLoaded(true)} />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Gallery />
          </>
        } />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
