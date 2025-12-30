import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TattooHome from './components/TattooHome';
import TattooWorksPage from './components/TattooWork';
import TattooDetail from './components/TattooDetail';
import TattooLogin from './components/TattooLogin';
import './components/TattooHome.css'; // Ensure styles are loaded for this sub-app
import TattooLoader from './loader/TattooLoader';

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
            <Route path="works" element={<TattooWorksPage />} />
            <Route path="work/:id" element={<TattooDetail />} />
            <Route path="login" element={<TattooLogin />} />
            {/* Catch-all redirect to home within the tattoo section */}
            <Route path="*" element={<Navigate to="/tattoo" replace />} />
        </Routes>
    );
};

export default TattooApp;
