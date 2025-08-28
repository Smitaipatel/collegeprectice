import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Brochure from './components/Brochure';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Brochure />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default App;
