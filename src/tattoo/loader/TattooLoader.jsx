import React from 'react';
import './TattooLoader.css';

const TattooLoader = () => {
    React.useEffect(() => {
        // Search and destroy any lingering global preloader
        const globalPreloader = document.querySelector('.preloader-container');
        if (globalPreloader) {
            globalPreloader.style.display = 'none';
            globalPreloader.style.visibility = 'hidden';
            globalPreloader.style.opacity = '0';
        }
    }, []);

    return (
        <div className="tattoo-loader-container">
            <div className="tattoo-loader-content">
                <div className="tattoo-loader-spinner"></div>
                <div className="tattoo-loader-text">Loading Art</div>
            </div>
        </div>
    );
};

export default TattooLoader;
