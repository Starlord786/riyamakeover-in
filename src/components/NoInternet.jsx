import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, RefreshCw } from 'lucide-react';
import './NoInternet.css';

const NoInternet = ({ onRetry }) => {
    return (
        <div className="no-internet-container">
            {/* Background Animated Particles */}
            <div className="particles-container">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="particle"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            scale: [0, 1.5, 0],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                        style={{
                            width: Math.random() * 10 + 2 + 'px',
                            height: Math.random() * 10 + 2 + 'px',
                        }}
                    />
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="content-wrapper"
            >
                {/* Animated Icon Container */}
                <div className="icon-container">
                    <motion.div
                        className="icon-glow"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="icon-circle">
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <WifiOff size={64} className="wifi-icon" />
                        </motion.div>
                    </div>

                    {/* Orbiting particles around icon */}
                    <motion.div
                        className="orbit-ring"
                        style={{ scale: 1.5 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="orbit-dot" />
                    </motion.div>
                </div>

                {/* Text Content */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="title"
                >
                    No Internet
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="description"
                >
                    Your connection appears to be offline.
                    <br />
                    Please check your network settings.
                </motion.p>

                {/* Retry Button */}
                <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onRetry}
                    className="retry-button group"
                >
                    <span className="button-content">
                        <RefreshCw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                        Retry Connection
                    </span>
                    <div className="button-shine" />
                </motion.button>
            </motion.div>

            {/* Bottom Decoration */}
            <div className="bottom-gradient" />
        </div>
    );
};

export default NoInternet;
