import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Preloader from './components/Preloader'
import NoInternet from './components/NoInternet'
import Contact from './components/Contact'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import Guides from './pages/Guides'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Licensing from './pages/Licensing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ScrollToTop from './components/ScrollToTop'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import Newsletter from './pages/Newsletter'
import TattooApp from './tattoo/TattooApp'
import ServiceDetail from './pages/ServiceDetail'
import { useNetworkStatus } from './hooks/useNetworkStatus'
import './App.css'

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(true);
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const { showOfflinePage } = useNetworkStatus();

  React.useEffect(() => {
    if (isImageLoaded && isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isImageLoaded, isLoading]);

  React.useEffect(() => {
    const triggerRoutes = ['/contact', '/newsletter', '/login', '/AdminLogin'];
    if (triggerRoutes.includes(location.pathname)) {
      setIsLoading(true);
    }
  }, [location.pathname]);

  if (showOfflinePage) {
    return <NoInternet onRetry={() => window.location.reload()} />;
  }

  const isTattooRoute = location.pathname.toLowerCase().startsWith('/tattoo');
  const isAdminLogin = location.pathname === '/AdminLogin';
  const isAdminDashboard = location.pathname === '/admin-dashboard';
  const shouldShowLayout = !isTattooRoute && !isAdminLogin && !isAdminDashboard;

  return (
    <>
      {/* 1. Global Scroll Reset & Floating Button */}
      <ScrollToTop />

      {!isTattooRoute && (
        <Preloader isLoading={isLoading} onImageLoaded={() => setIsImageLoaded(true)} />
      )}

      {shouldShowLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:slug" element={<ServiceDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/licensing" element={<Licensing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/tattoo/*" element={<TattooApp />} />
      </Routes>

      {shouldShowLayout && <Footer />}
    </>
  )
}

export default App