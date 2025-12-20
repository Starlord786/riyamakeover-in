import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TattooHome from './components/TattooHome';
import './components/TattooHome.css'; // Ensure styles are loaded for this sub-app
import TattooLoader from './loader/TattooLoader';

const TattooApp = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        // Add a class to body to indicate we are in tattoo mode
        document.body.classList.add('tattoo-mode');

        // Simulate loading resources for the tattoo section
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
            document.body.classList.remove('tattoo-mode');
        };
    }, []);

    if (isLoading) {
        return <TattooLoader />;
    }

    return (
        <Routes>
            <Route index element={<TattooHome />} />
            <Route path="home" element={<TattooHome />} />
            {/* Catch-all redirect to home within the tattoo section */}
            <Route path="*" element={<Navigate to="/tattoo" replace />} />
        </Routes>
    );
};

export default TattooApp;
