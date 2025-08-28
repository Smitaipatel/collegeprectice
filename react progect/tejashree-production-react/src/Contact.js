import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
                    <p className="mb-4">We would love to discuss how we can make your event memorable and impactful.</p>
                    <p><strong>Address:</strong> C/804, Shreeji Towers, Opp. Himalaya Mall, Ahmedabad - 380052</p>
                    <p><strong>Phone:</strong> +91 98255 88922, +91 99744 42337</p>
                    <p><strong>Email:</strong> tejashreeproductions@gmail.com</p>
                </div>
                <div>
                    {/* Uncomment to add a contact form */}
                    {/* <form className="bg-white shadow-lg p-6 rounded-lg">
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">Your Name</label>
                            <input type="text" className="w-full border rounded px-4 py-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">Email</label>
                            <input type="email" className="w-full border rounded px-4 py-2" />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-medium">Message</label>
                            <textarea rows="4" className="w-full border rounded px-4 py-2"></textarea>
                        </div>
                        <button type="submit" className="btn-primary w-full">Send Message</button>
                    </form> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;
