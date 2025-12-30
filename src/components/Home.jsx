import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Gallery from './Gallery';
import FAQ from './FAQ';
import Contact from './Contact';
import BrandIntro from './BrandIntro';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>

            <Hero />
            <BrandIntro />
            <Services />
            <Gallery />
            <FAQ />
            <Reviews />
            <Contact />
        </>
    );
};


export default Home;


