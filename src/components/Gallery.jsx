import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1487412947132-28c53af9fbe3?q=80&w=800&auto=format&fit=crop',
        title: 'BRIDAL RADIANCE',
        category: 'WEDDING',
        span: 'col-2' // Wide item
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
        title: 'EVENING GLAM',
        category: 'PARTY',
        span: 'row-2' // Tall item
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
        title: 'EDITORIAL ARTS',
        category: 'FASHION',
        span: ''
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=800&auto=format&fit=crop',
        title: 'ELEGANT STYLES',
        category: 'HAIR',
        span: ''
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
        title: 'ENGAGEMENT GLOW',
        category: 'EVENTS',
        span: ''
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
        title: 'RECEPTION QUEEN',
        category: 'BRIDAL',
        span: 'col-2'
    }
];

const Gallery = () => {
    return (
        <section className="gallery-premium-section" id="gallery">
            <div className="gallery-premium-header">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="gallery-title-lg"
                >
                    SELECTED <motion.span
                        className="gallery-outline"
                        initial={{
                            clipPath: "inset(0 100% 0 0)",
                            opacity: 1
                        }}
                        whileInView={{
                            clipPath: "inset(0 0% 0 0)",
                            opacity: 1
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            delay: 0.2
                        }}
                        style={{ display: "inline-block" }}
                    >
                        Works
                    </motion.span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="gallery-subtitle-premium"
                >
                    A curate portfolio of our finest transformations.
                </motion.p>
            </div>

            <div className="gallery-grid-premium">
                {galleryImages.map((img, index) => (
                    <motion.div
                        key={img.id}
                        className={`gallery-item-premium ${img.span}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ margin: "-100px" }}
                    >
                        <div className="gallery-img-container">
                            <img src={img.url} alt={img.title} className="gallery-img-p" />
                            <div className="gallery-overlay-p">
                                <span className="gallery-cat">{img.category}</span>
                                <h3 className="gallery-item-title">{img.title}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="gallery-footer-p">
                <button className="view-all-btn-p">VIEW FULL PORTFOLIO</button>
            </div>
        </section>
    );
};

export default Gallery;
