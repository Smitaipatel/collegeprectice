import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero fade-in-left">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Drama, Films and Cultural events</h1>
                    <p className="text-lg mb-8">Raising public awareness through engaging entertainment experiences across Gujarat</p>
                    <a href="#contact" className="bg-white text-purple-700 px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition">Book Now</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
