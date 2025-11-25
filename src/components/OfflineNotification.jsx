import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WifiOff } from 'lucide-react';
import './OfflineNotification.css';

const OfflineNotification = ({ show, countdown }) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    className="offline-notification"
                >
                    <div className="notif-icon-wrapper">
                        <WifiOff className="notif-icon" size={24} />
                        <span className="ping-wrapper">
                            <span className="ping-animation"></span>
                            <span className="ping-dot"></span>
                        </span>
                    </div>
                    <div className="notif-content">
                        <h3>No Internet Connection</h3>
                        <p>Switching to offline mode in <span className="countdown-text">{countdown}s</span></p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default OfflineNotification;
