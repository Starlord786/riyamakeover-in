import React, { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Preloader from './components/Preloader'
import NoInternet from './components/NoInternet'
import ScrollToTop from './components/ScrollToTop'
import { useNetworkStatus } from './hooks/useNetworkStatus'

// Eagerly loaded (needed immediately on first render)
import Services from './components/Services'

// Lazy-loaded pages (only fetched when user navigates there)
const Gallery = lazy(() => import('./components/Gallery'))
const Contact = lazy(() => import('./components/Contact'))
const About = lazy(() => import('./pages/About'))
const Features = lazy(() => import('./pages/Features'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Guides = lazy(() => import('./pages/Guides'))
const Terms = lazy(() => import('./pages/Terms'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Licensing = lazy(() => import('./pages/Licensing'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const AdminLogin = lazy(() => import('./pages/AdminLogin'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const Newsletter = lazy(() => import('./pages/Newsletter'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))

// Tattoo section — large sub-app, load lazily
const TattooApp = lazy(() => import('./tattoo/TattooApp'))

import './App.css'

// Simple full-screen spinner shown while a lazy chunk loads
function PageSpinner() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh', fontSize: '1.2rem', color: '#888'
    }}>
      Loading…
    </div>
  )
}

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
  }, [isImageLoaded]);

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

      <Suspense fallback={<PageSpinner />}>
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

          {/* Tattoo Section Route */}
          <Route path="/tattoo/*" element={<TattooApp />} />
        </Routes>
      </Suspense>

      {shouldShowLayout && <Footer />}
    </>
  )
}

export default App