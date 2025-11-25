import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1487412947132-28c53af9fbe3?q=80&w=800&auto=format&fit=crop',
        title: 'Bridal Makeup',
        desc: 'Radiant look for your special day'
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
        title: 'Party Glam',
        desc: 'Shine bright at every event'
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
        title: 'Editorial',
        desc: 'High fashion artistic looks'
    },
    {
        id: 4,
        url: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?q=80&w=800&auto=format&fit=crop',
        title: 'Hairstyling',
        desc: 'Elegant styles for any occasion'
    },
    {
        id: 5,
        url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
        title: 'Engagement',
        desc: 'Subtle yet stunning makeover'
    },
    {
        id: 6,
        url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
        title: 'Reception',
        desc: 'Bold and beautiful evening look'
    }
];

const Gallery = () => {
    const scrollContainer = useRef(null);

    const scroll = (direction) => {
        const container = scrollContainer.current;
        if (container) {
            const scrollAmount = 340; // card width + gap roughly
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h1>Our Masterpieces</h1>
                <p>Explore our latest work and transformations</p>
            </div>

            <div className="carousel-wrapper">
                <button
                    className="nav-btn prev-btn"
                    onClick={() => scroll('left')}
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={32} />
                </button>

                <div className="carousel-track" ref={scrollContainer}>
                    {galleryImages.map((image) => (
                        <div className="gallery-card" key={image.id}>
                            <div className="card-image-wrapper">
                                <img src={image.url} alt={image.title} loading="lazy" />
                            </div>
                            <div className="card-content">
                                <h3>{image.title}</h3>
                                <p>{image.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="nav-btn next-btn"
                    onClick={() => scroll('right')}
                    aria-label="Scroll right"
                >
                    <ChevronRight size={32} />
                </button>
            </div>
        </div>
    );
};

export default Gallery;
