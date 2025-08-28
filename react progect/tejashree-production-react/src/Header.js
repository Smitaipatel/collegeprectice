import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center py-4">
        <div className="flex items-center space-x-3">
          <img src="/img/logo2.png" alt="Logo" className="h-10" />
          <span className="font-bold text-xl text-gray-800">
            Tejashree Production
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <a href="#contact" className="btn-primary hidden md:block">
          Request Proposal
        </a>
      </div>
    </header>
  );
}

export default Header;