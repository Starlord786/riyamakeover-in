import React, { useEffect, useState } from 'react';
import './Preloader.css';
import loaderImg from '../assets/loader.png';

const Preloader = ({ isLoading, onImageLoaded }) => {
    // Defensive check: Never show on tattoo pages
    if (window.location.pathname.toLowerCase().includes('tattoo')) return null;

    const [show, setShow] = useState(true);
    const [imageReady, setImageReady] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = loaderImg;

        const handleLoad = () => {
            setImageReady(true);
            if (onImageLoaded) onImageLoaded();
        };

        img.onload = handleLoad;
        img.onerror = handleLoad; // Proceed even if image fails
    }, [onImageLoaded]);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (!show) return null;

    return (
        <div className={`preloader-container ${!isLoading ? 'fade-out' : ''}`}>
            {imageReady && (
                <div className="loader-wrapper">
                    <div className="loader-circle"></div>
                    <img src={loaderImg} alt="Loading..." className="loader-image" />
                </div>
            )}
        </div>
    );
};

export default Preloader;
