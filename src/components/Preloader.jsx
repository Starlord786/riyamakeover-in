import React, { useEffect, useState } from 'react';
import './Preloader.css';
import loaderImg from '../assets/loader.png';

const Preloader = ({ isLoading }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            // Add a small delay to allow the fade-out animation to play
            const timer = setTimeout(() => {
                setShow(false);
            }, 500); // Match the transition duration in CSS
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (!show) return null;

    return (
        <div className={`preloader-container ${!isLoading ? 'fade-out' : ''}`}>
            <div className="loader-wrapper">
                <div className="loader-circle"></div>
                <img src={loaderImg} alt="Loading..." className="loader-image" />
            </div>
        </div>
    );
};

export default Preloader;
