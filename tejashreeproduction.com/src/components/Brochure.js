import React from 'react';

const Brochure = () => {
    return (
        <section id="brochure" className="py-16 bg-purple-600 text-white fade-in">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="section-title text-3xl font-bold mb-4">Download Our Brochure</h2>
                    <p className="mb-8 text-lg">Get complete details about all our programs, including pricing and package options.</p>
                    <a href="#" className="inline-block bg-white text-purple-700 px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition">Download Now (PDF)</a>
                </div>
            </div>
        </section>
    );
};

export default Brochure;
