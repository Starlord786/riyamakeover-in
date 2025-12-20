import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import TattooHome from './TattooHome';
import './TattooHome.css'; // Ensure styles are loaded for this sub-app

const TattooApp = () => {
    return (
        <Routes>
            <Route path="/" element={<TattooHome />} />
            <Route path="/home" element={<TattooHome />} />
            {/* Catch-all redirect to home within the tattoo section */}
            <Route path="*" element={<Navigate to="/tattoo" replace />} />
        </Routes>
    );
};

export default TattooApp;
