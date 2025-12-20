import React from 'react';
import heroBg from '../../assets/hero1.png'; // Placeholder

const TattooArtist = () => {
    return (
        <section id="artist" className="artist-section">
            <div className="artist-content">
                <div className="artist-image-wrapper">
                    <img src={heroBg} alt="Artist Profile" />
                </div>
                <div className="artist-text">
                    <h2>Meet <br /><span className="span-neon">The Artist</span></h2>
                    <div className="bio-points">
                        <div className="bio-point">
                            <span className="star-bullet">★</span>
                            <p>I specialize in dark realism and surrealism, creating custom pieces that tell your unique story.</p>
                        </div>
                        <div className="bio-point">
                            <span className="star-bullet">★</span>
                            <p>With over 10 years of experience, I ensure a safe, sterile, and professional environment.</p>
                        </div>
                        <div className="bio-point">
                            <span className="star-bullet">★</span>
                            <p>My goal is to create permanent art that you will be proud to wear for a lifetime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TattooArtist;
