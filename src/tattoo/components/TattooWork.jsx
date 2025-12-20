import React from 'react';
import heroBg from '../../assets/hero1.png'; // Placeholder

const TattooWork = () => {
    const galleryImages = [heroBg, heroBg, heroBg, heroBg, heroBg]; // Placeholders

    return (
        <section id="gallery" className="gallery-section">
            <h2 className="section-title">On The <span className="span-neon">Board</span></h2>
            <div className="polaroid-grid">
                {galleryImages.map((img, index) => (
                    <div className="polaroid-card" key={index} style={{ '--rotation': `${Math.random() * 10 - 5}deg` }}>
                        <div className="tape"></div>
                        <img src={img} alt="Tattoo Work" />
                        {index % 2 === 0 && <div className="sticky-note">Available</div>}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TattooWork;
