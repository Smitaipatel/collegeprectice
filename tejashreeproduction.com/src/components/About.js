import React from 'react';

const About = () => {
    return (
        <section className="py-16 fade-in-right">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-3xl font-bold text-center">About Us</h2>
                <div className="max-w-4xl mx-auto mt-8 grid md:grid-cols-2 gap-8">
                    <div>
                        <img 
                            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/547031d1-cf10-4592-99a1-75c0d07c0ca6.png" 
                            alt="Team performing a traditional Gujarati dance on stage" 
                            className="rounded-lg overflow-hidden shadow-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="mb-4">We specialize in creating professional entertainment programs that serve dual purposes - entertaining audiences while raising public awareness on important social issues.</p>
                        <p>Our team consists of experienced performers committed to preserving and promoting traditional Gujarati art forms while adapting them to contemporary storytelling methods.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
