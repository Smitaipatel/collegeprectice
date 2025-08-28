import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
