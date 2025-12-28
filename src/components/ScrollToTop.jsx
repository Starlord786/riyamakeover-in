import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Handle scroll restoration on route change
    useEffect(() => {
        if (hash) {
            setTimeout(() => {
                const id = hash.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    // Handle button visibility and progress
    useEffect(() => {
        const handleScroll = () => {
            // Calculate visibility
            const isTattoo = pathname.toLowerCase().startsWith('/tattoo');
            if (window.pageYOffset > 300 && !isTattoo) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Calculate progress
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;

            setScrollProgress(Number(scroll));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // SVG Circle setup
    const radius = 23;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - scrollProgress * circumference;

    return (
        <>
            {isVisible && (
                <div
                    className="scroll-to-top-container"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <svg
                        className="progress-ring"
                        width="50"
                        height="50"
                    >
                        <circle
                            className="progress-ring__circle-bg"
                            strokeWidth="2"
                            fill="transparent"
                            r={radius}
                            cx="25"
                            cy="25"
                        />
                        <circle
                            className="progress-ring__circle"
                            strokeWidth="2"
                            fill="transparent"
                            r={radius}
                            cx="25"
                            cy="25"
                            style={{
                                strokeDasharray: `${circumference} ${circumference}`,
                                strokeDashoffset: strokeDashoffset
                            }}
                        />
                    </svg>
                    <div className="scroll-to-top-icon">
                        <ArrowUp size={24} strokeWidth={2.5} />
                    </div>
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
