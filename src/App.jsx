import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Preloader from './components/Preloader'

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
      <Hero />
    </>
  )
}

export default App
