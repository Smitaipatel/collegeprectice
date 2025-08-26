import React from 'react';

const servicesData = [
    {
        title: "Professional Dramas",
        description: "Thought-provoking theatrical performances that entertain while addressing social issues. Our dramas are professionally scripted and performed by trained actors.",
        imgSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08f09f0b-28d0-4b11-bf0a-fee762f44d37.png"
    },
    {
        title: "Street Shows",
        description: "Engaging public performances including traditional forms like Bhavai, Dayro, and Garba that bring communities together while spreading important messages.",
        imgSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0ec6e42-9fa3-42d6-b2b8-6e5297399459.png"
    },
    {
        title: "Cultural Programs",
        description: "Composite cultural performances showcasing the diversity of Gujarat's artistic traditions including dance, music, and theater.",
        imgSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9b9b106-cb57-4b62-9abf-14944f4cb0dd.png"
    },
    {
        title: "Garba & Dandiya Nights",
        description: "Festive dance events featuring professional dancers and musicians to celebrate Navratri and other cultural events with authentic Gujarati spirit.",
        imgSrc: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b1eed91-37fa-4bab-91ed-3d94e440c70f.png"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-12">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="service-card bg-white">
                            <img src={service.imgSrc} alt={service.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
