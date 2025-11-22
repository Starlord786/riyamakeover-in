import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'
import Preloader from './components/Preloader'

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate loading time or wait for resources
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader isLoading={isLoading} />
      <Navbar />
      <Hero />
    </>
  )
}

export default App
