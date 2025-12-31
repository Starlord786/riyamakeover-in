import React from 'react';
import './TattooReviews.css';
import { Star, MessageSquareQuote } from 'lucide-react';

const tattooReviewsData = [
    {
        id: 1,
        name: "Rahul Verma",
        service: "Full Sleeve",
        content: "Incredible attention to detail. The line work is crisp and the shading is smooth. Riya is a true artist who made the whole process comfortable.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        service: "Minimalist Tattoo",
        content: "I was nervous as it was my first tattoo, but the studio vibe and professionalism put me at ease instantly. Love my new ink!",
        rating: 5
    },
    {
        id: 3,
        name: "Vikram Singh",
        service: "Cover Up",
        content: "Amazing cover-up work! You can't even tell there was an old tattoo underneath. Highly recommended for anyone looking for quality custom work.",
        rating: 5
    }
];

const ReviewCard = ({ review }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const CHAR_LIMIT = 100;
    const shouldTruncate = review.content.length > CHAR_LIMIT;

    return (
        <div className="tr-card">
            <div className="tr-quote-overlay">
                <MessageSquareQuote size={80} strokeWidth={1} />
            </div>
            <div className="tr-card-content">
                <p className={`tr-text ${!isExpanded && shouldTruncate ? 'clamped' : ''}`}>
                    "{review.content}"
                </p>
                {shouldTruncate && (
                    <button
                        className="tr-read-more"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? 'View less' : 'View more'}
                    </button>
                )}
                {!shouldTruncate && <div style={{ marginBottom: '25px' }}></div>}

                <div className="tr-divider"></div>
                <div className="tr-meta">
                    <h4 className="tr-author">{review.name}</h4>
                    <span className="tr-service">{review.service}</span>
                </div>
                <div className="tr-stars">
                    {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="var(--accent-color)" stroke="none" />
                    ))}
                </div>
            </div>
        </div>
    );
};

const TattooReviews = () => {
    return (
        <section id="reviews" className="tattoo-reviews-section">
            <div className="repo-container">
                <div className="tr-header">
                    <h2 className="tr-title">Google Reviews</h2>
                    <div className="tr-bar"></div>
                    <a
                        href="https://share.google/PG8DugJToqCFQPEl9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tr-subtitle"
                        style={{ textDecoration: 'none', display: 'inline-block', marginTop: '10px' }}
                    >
                        See what people say about their ink experience on Google.
                    </a>
                </div>

                <div className="tr-grid">
                    {tattooReviewsData.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TattooReviews;
