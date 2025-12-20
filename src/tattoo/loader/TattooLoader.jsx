import React from 'react';
import './TattooLoader.css';

const TattooLoader = () => {
    React.useLayoutEffect(() => {
        // Nuclear option: Inject a style tag to force hide the global preloader
        const style = document.createElement('style');
        style.innerHTML = `
            .preloader-container { 
                display: none !important; 
                opacity: 0 !important; 
                visibility: hidden !important; 
                pointer-events: none !important;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="tattoo-loader-container">
            <div className="tattoo-loader-content">
                <div className="tattoo-loader-spinner"></div>
                <div className="tattoo-loader-text">Loading Art</div>
            </div>
        </div>
    );
};

export default TattooLoader;
