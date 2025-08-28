import React from 'react';

const Gallery = () => {
const images = [
        "/web.jpg", "/web2.jpg", "/web3.jpg", "/web4.jpg", "/web5.jpg",
        "/web6.jpg", "/web7.jpg", "/web8.jpg", "/web9.jpg",
        "/web10.jpg", "/web11.jpg", "/web12.jpg", "/web13.jpg",
        "/web14.jpg", "/web15.jpg", "/web16.jpg", "/web17.jpg",
        "/web100.png", "/web110.png"
    ];

    return (
        <section id="gallery" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Gallery</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            className="rounded-lg shadow-md object-cover w-50 h-50" 
                            alt="Event" 
                            loading="lazy"
                            style={{ aspectRatio: '4 / 3' }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
