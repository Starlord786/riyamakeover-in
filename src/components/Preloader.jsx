import React, { useEffect, useState } from 'react';
import './Preloader.css';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ isLoading, onImageLoaded }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = logo;

        const handleLoad = () => {
            if (onImageLoaded) onImageLoaded();
        };

        img.onload = handleLoad;
        img.onerror = handleLoad; // Proceed even if image fails
    }, [onImageLoaded]);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setShow(false);
            }, 500); // Wait for fade out transition
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (!show) return null;

    return (
        <div className={`preloader-container ${!isLoading ? 'fade-out' : ''}`}>
            <div className="loader-wrapper">
                <motion.img
                    src={logo}
                    alt="Riya Makeover"
                    className="loader-logo"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                <div className="loading-bar-container">
                    <motion.div
                        className="loading-bar-progress"
                        initial={{ width: "0%" }}
                        animate={{ width: isLoading ? "100%" : "100%" }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Preloader;
