import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TattooHome from './components/TattooHome';
import TattooWorksPage from './components/TattooWork';
import TattooDetail from './components/TattooDetail';
import TattooLogin from './components/TattooLogin';
import TattooContact from './components/TattooContact';
import TattooProcess from './components/TattooProcess';
import TattooFAQ from './components/TattooFAQ';
import TattooReviews from './components/TattooReviews';
import TattooNavbar from './components/TattooNavbar';
import Footer from './components/Footer';
import './components/TattooHome.css'; // Ensure styles are loaded for this sub-app
import TattooLoader from './loader/TattooLoader';

const TattooLayout = ({ children }) => {
    const location = useLocation();
    return (
        <div className="tattoo-layout">
            <TattooNavbar />
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
            <Footer />
        </div>
    );
};

const TattooApp = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Add a class to body to indicate we are in tattoo mode
        document.body.classList.add('tattoo-mode');

        // Save original title and favicon
        const originalTitle = document.title;
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/svg+xml';
        link.rel = 'icon';
        const originalFavicon = link.href;

        // Update Title and Favicon
        document.title = "Riya Tattoo";
        link.href = '/dragon-tattoo.svg';
        document.head.appendChild(link); // Ensure it's in head if we created it

        // Simulate loading resources for the tattoo section
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
            document.body.classList.remove('tattoo-mode');

            // Restore Title and Favicon
            document.title = originalTitle;
            link.href = originalFavicon;
        };
    }, []);

    if (isLoading) {
        return <TattooLoader />;
    }

    return (
        <Routes>
            <Route index element={<TattooHome />} />
            <Route path="work/:id" element={<TattooDetail />} />
            <Route path="login" element={<TattooLogin />} />
            <Route path="*" element={<Navigate to="/tattoo" replace />} />
        </Routes>
    );
};

export default TattooApp;
