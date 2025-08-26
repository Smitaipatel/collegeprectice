import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p>&copy; 2025 Tejashree Production. All Rights Reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://www.facebook.com/share/16M4aBKm19/" className="social-icon text-white-400 hover:text-white-400" target="_blank" rel="noopener noreferrer">
                        {/* Facebook SVG */}
                    </a>
                    <a href="https://www.instagram.com/dhananjay.patel.520" className="social-icon text-white-400 hover:text-white-400" target="_blank" rel="noopener noreferrer">
                        {/* Instagram SVG */}
                    </a>
                    <a href="https://wa.me/919825588922" className="social-icon text-white-400 hover:text-white-400" target="_blank" rel="noopener noreferrer">
                        {/* WhatsApp SVG */}
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
