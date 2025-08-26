import React from 'react';

const Gallery = () => {
    const images = [
        "img/web2.jpg", "img/web3.jpg", "img/web4.jpg", "img/web5.jpg",
        "img/web6.jpg", "img/web7.jpg", "img/web8.jpg", "img/web9.jpg",
        "img/web10.jpg", "img/web11.jpg", "img/web12.jpg", "img/web13.jpg",
        "img/web14.jpg", "img/web15.jpg", "img/web16.jpg", "img/web17.jpg"
    ];

    return (
        <section id="gallery" className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Gallery</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <img key={index} src={img} className="rounded-lg shadow-md" alt="Event" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
