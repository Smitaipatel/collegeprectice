import React from 'react';

const Header = () => {
    return (
        <header className="header sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4">
                <nav className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Tejashree Production</div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="nav-link text-white">Home</a>
                        <a href="#services" className="nav-link text-white">Our Services</a>
                        <a href="#gallery" className="nav-link text-white">Gallery</a>
                        <a href="#brochure" className="nav-link text-white">Brochure</a>
                        <a href="#contact" className="nav-link text-white">Contact Us</a>
                    </div>
                    <button className="md:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
