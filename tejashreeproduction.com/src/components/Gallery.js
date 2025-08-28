import React from 'react';

const Gallery = () => {
    return (
        <section id="gallery" className="py-16 fade-in">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-3xl font-bold text-center">Gallery</h2>
                <p className="text-center mb-8 max-w-2xl mx-auto">Explore our past performances and events</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <img src="img/web.jpg" alt="Drama team performing on stage with elaborate costumes and set design" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    </div>
                    <div>
                        <img src="img/web2.jpg" alt="Street performance with audience gathered around Bhavai artists" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    </div>
                    <div>
                        <img src="img/web3.jpg" alt="Puppet show entertaining children at a school event" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    </div>
                    <div>
                        <img src="img/web4.jpg" alt="Musicians performing traditional Dayro music" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    </div>
                    <div>
                        <img src="img/web5.jpg" alt="Navratri celebration with professional Garba dancers in colorful outfits" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    </div>
                    <div>
                        <img src="img/web6.jpg" alt="Orchestra performing wedding songs at a large celebration" className="w-full h-64 object-cover rounded-lg shadow-md" />
                    </div>
                    {/* Additional images can be added here */}
                </div>
                
                <div className="text-center mt-8">
                    <p className="mb-4">We regularly update our gallery with photos and videos of our programs.</p>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
