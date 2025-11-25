import React from 'react';
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
    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h1>Our Masterpieces</h1>
                <p>Explore our latest work and transformations</p>
            </div>

            <div className="carousel-wrapper">
                <div className="carousel-track">
                    {/* Double the images to create seamless infinite scroll */}
                    {[...galleryImages, ...galleryImages].map((image, index) => (
                        <div className="gallery-card" key={`${image.id}-${index}`}>
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
            </div>
        </div>
    );
};

export default Gallery;
