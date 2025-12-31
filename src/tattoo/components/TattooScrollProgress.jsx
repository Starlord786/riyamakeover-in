import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './TattooScroll.css';

const TattooScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    // Smooth the progress value
    const scalePath = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            className={`tattoo-scroll-progress ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                {/* Background path */}
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    className="progress-background"
                />
                {/* Progress path */}
                <motion.path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    className="progress-path"
                    style={{
                        pathLength: scalePath
                    }}
                />
            </svg>
            <div className="scroll-arrow">
                <ArrowUp size={20} color="#2ecc71" />
            </div>
        </motion.div>
    );
};

export default TattooScrollProgress;
