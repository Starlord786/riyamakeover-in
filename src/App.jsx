import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Preloader from './components/Preloader'
import NoInternet from './components/NoInternet'
import OfflineNotification from './components/OfflineNotification'
import Contact from './components/Contact'
import Home from './components/Home'
import { useNetworkStatus } from './hooks/useNetworkStatus'


function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const { showOfflinePage, showNotification, countdown } = useNetworkStatus();

  React.useEffect(() => {
    if (isImageLoaded) {
      // Start the timer only after the image has loaded to ensure user sees the full loader
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isImageLoaded]);

  // If offline page should be shown, render it exclusively (or on top)
  if (showOfflinePage) {
    return <NoInternet onRetry={() => window.location.reload()} />;
  }

  return (
    <>
      <OfflineNotification show={showNotification} countdown={countdown} />
      <Preloader isLoading={isLoading} onImageLoaded={() => setIsImageLoaded(true)} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
