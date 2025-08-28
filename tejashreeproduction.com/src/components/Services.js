import React from 'react';

const Services = () => {
    return (
        <section id="services" className="py-16 bg-gray-50 fade-in">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-3xl font-bold text-center fade-in-left">Our Services</h2>
                <p className="text-center mb-12 max-w-2xl mx-auto">We offer a wide range of professional entertainment programs suitable for all occasions and events.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className="service-card bg-white">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08f09f0b-28d0-4b11-bf0a-fee762f44d37.png" alt="Professional drama performance on stage with bright costumes" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Professional Dramas</h3>
                            <p>Thought-provoking theatrical performances that entertain while addressing social issues. Our dramas are professionally scripted and performed by trained actors.</p>
                        </div>
                    </div>
                    
                    {/* Service 2 */}
                    <div className="service-card bg-white">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0ec极狐6e42-9fa3-42d6-b2b8-6e5297399459.png" alt="Street show in progress with crowd watching traditional performers" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Street Shows</h3>
                            <p>Engaging public performances including traditional forms like Bhavai, Dayro, and Garba that bring communities together while spreading important messages.</p>
                        </div>
                    </div>
                    
                    {/* Service 4 */}
                    <div className="service-card bg-white">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9b9b106-cb57-4b62-9abf-14944f4cb0dd.png" alt="Group performing cultural dance with colorful costumes" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Cultural Programs</h3>
                            <p>Composite cultural performances showcasing the diversity of Gujarat's artistic traditions including dance, music, and theater.</p>
                        </div>
                    </div>
                    
                    {/* Service 6 */}
                    <div className="service-card bg-white">
                        <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b1eed91-37fa-4bab-91ed-3d94e440c70f.png" alt="Garba dance performance during Navratri festival with many dancers" className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Garba & Dandiya Nights</h3>
                            <p>Festive dance events featuring professional dancers and musicians to celebrate Navratri and other cultural events with authentic Gujarati spirit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
