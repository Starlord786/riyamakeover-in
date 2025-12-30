import React from 'react';
import './Reviews.css';
import { Star, Quote } from 'lucide-react';

const reviewsData = [
    {
        id: 1,
        name: "Priya Sharma",
        role: "Bride",
        content: "Riya is absolutely magical! My bridal makeup was flawless and stayed perfect throughout the entire wedding. She truly understood the look I wanted.",
        rating: 5,
        initials: "PS"
    },
    {
        id: 2,
        name: "Anjali Gupta",
        role: "Regular Client",
        content: "The best makeover studio in town. Professional, hygienic, and always up to date with the latest trends. I wouldn't trust anyone else with my skin.",
        rating: 5,
        initials: "AG"
    },
    {
        id: 3,
        name: "Meera Patel",
        role: "Fashion Model",
        content: "Worked with Riya for a photoshoot and the results were stunning. Her attention to detail and ability to enhance natural features is unparalleled.",
        rating: 5,
        initials: "MP"
    }
];

const Reviews = () => {
    return (
        <section id="reviews" className="reviews-section">
            <div className="container">
                <div className="reviews-header">
                    <span className="reviews-subtitle">Testimonials</span>
                    <h2 className="reviews-title">Client <span className="text-accent">Love</span></h2>
                    <div className="reviews-divider"></div>
                </div>

                <div className="reviews-grid">
                    {reviewsData.map((review) => (
                        <div key={review.id} className="review-card">
                            <div className="review-quote-icon">
                                <Quote size={40} />
                            </div>
                            <p className="review-content">"{review.content}"</p>

                            <div className="review-footer">
                                <div className="review-avatar unselectable">
                                    {review.initials}
                                </div>
                                <div className="review-info">
                                    <h4 className="review-author">{review.name}</h4>
                                    <span className="review-role">{review.role}</span>
                                </div>
                            </div>

                            <div className="review-rating">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--accent)" stroke="none" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
