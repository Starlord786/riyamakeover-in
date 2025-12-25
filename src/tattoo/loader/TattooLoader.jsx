import React from 'react';
import './TattooLoader.css';
import { motion } from 'framer-motion';

const TattooLoader = () => {
    // Force hide global preloader
    React.useLayoutEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            .preloader-container { 
                display: none !important; 
                opacity: 0 !important; 
                visibility: hidden !important; 
                pointer-events: none !important;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <motion.div
            className="tattoo-loader-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
            <div className="tattoo-loader-content">
                <motion.div
                    className="glitch-text"
                    data-text="RIYA TATTOO"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    RIYA TATTOO
                </motion.div>

                <motion.div
                    className="loader-bar"
                >
                    <motion.div
                        className="loader-progress"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TattooLoader;
