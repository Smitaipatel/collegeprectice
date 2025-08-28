import React from 'react';

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-50 fade-in">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-3xl font-bold text-center">What Our Clients Say</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13c47d94-ecfd-4fa3-9392-3d88705496fa.png" alt="Portrait of Mr. Patel, community organizer" className="w-12 h-12 rounded-full object-cover" />
                            <div className="ml-4">
                                <h4 className="font-semibold">Mr. Patel</h4>
                                <p className="text-sm text-gray-500">Community Organizer</p>
                            </div>
                        </div>
                        <p className="text-gray-700">"The street show they performed on water conservation was both entertaining and educational. The whole community learned while being thoroughly entertained."</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7abc93c7-e571-48ee-86d2-01aaf8f36cc8.png" alt="Portrait of Mrs. Desai, school principal" className="w-12 h-12 rounded-full object-cover" />
                            <div className="ml-4">
                                <h4 className="font-semibold">Mrs. Desai</h4>
                                <p className="text-sm text-gray-500">School Principal</p>
                            </div>
                        </div>
                        <p className="text-gray-700">"Their educational drama on digital safety was perfect for our students. The professional approach and interactive elements kept all students engaged."</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d23058f5-4d39-4f8d-9275-6cd7047b5bbc.png" alt="Portrait of Mr. Sharma, event manager" className="w-12 h-12 rounded-full object-cover" />
                            <div className="ml-4">
                                <h4 className="font-semibold">Mr. Sharma</h4>
                                <p className="text-sm text-gray-500">Event Manager</p>
                            </div>
                        </div>
                        <p className="text-gray-700">"For our corporate event, they delivered a fantastic composite cultural program that showcased Gujarat's diversity beautifully. Very professional team!"</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
