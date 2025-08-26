import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-light">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/547031d1-cf10-4592-99a1-75c0d07c0ca6.png" alt="Team performing a traditional Gujarati dance on stage" className="rounded-lg overflow-hidden shadow-lg" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">About Us</h2>
                    <p className="mb-4">At Tejashree Production, we specialize in professional entertainment programs that go beyond performance – creating awareness, connecting communities, and inspiring change.</p>
                    <ul className="space-y-3">
                        <li>✔️ 30+ Years of Industry Experience</li>
                        <li>✔️ 1000+ Shows done in last six months</li>
                        <li>✔️ Trusted by Corporates, NGOs & Schools</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
