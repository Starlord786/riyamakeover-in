import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

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

    // Handle button visibility
    useEffect(() => {
        const toggleVisibility = () => {
            const isTattoo = pathname.toLowerCase().startsWith('/tattoo');
            if (window.pageYOffset > 300 && !isTattoo) {
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
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '40px',
                        right: '40px',
                        backgroundColor: 'transparent',
                        border: '2px solid #d4af37',
                        color: '#d4af37',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        zIndex: 1000,
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                        backdropFilter: 'blur(5px)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#d4af37';
                        e.currentTarget.style.color = '#000';
                        e.currentTarget.style.transform = 'translateY(-5px)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#d4af37';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} strokeWidth={2.5} />
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
