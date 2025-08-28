import React from "react";
import "./App.css";

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* Header */}
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
            <a href="/Video.html" className="nav-link">Video</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <a href="#contact" className="btn-primary hidden md:block">
            Request Proposal
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/img/web110.png')",
        }}
      >
        <div className="max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Drama, Films and Cultural Events
          </h1>
          <p className="text-lg mb-8">
            Delivering impactful performances that blend entertainment with
            awareness for businesses, communities & organizations.
          </p>
          <a href="#contact" className="btn-primary">Get in Touch</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-light">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/547031d1-cf10-4592-99a1-75c0d07c0ca6.png"
              alt="Team performing traditional Gujarati dance"
              className="rounded-lg overflow-hidden shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="mb-4">
              At Tejashree Production, we specialize in professional
              entertainment programs that go beyond performance – creating
              awareness, connecting communities, and inspiring change.
            </p>
            <ul className="space-y-3">
              <li>✔️ 30+ Years of Industry Experience</li>
              <li>✔️ 1000+ Shows in last six months</li>
              <li>✔️ Trusted by Corporates, NGOs & Schools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Example service */}
            <div className="service-card bg-white">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08f09f0b-28d0-4b11-bf0a-fee762f44d37.png"
                alt="Drama"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Professional Dramas</h3>
                <p>
                  Thought-provoking theatrical performances that entertain while
                  addressing social issues.
                </p>
              </div>
            </div>
            {/* Repeat other services like Street Shows, Cultural Programs, Garba */}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/img/web2.jpg" alt="Event" className="rounded-lg shadow-md" />
            <img src="/img/web3.jpg" alt="Event" className="rounded-lg shadow-md" />
            {/* Add all other gallery images here */}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-4">
              We would love to discuss how we can make your event memorable and
              impactful.
            </p>
            <p>
              <strong>Address:</strong> C/804, Shreeji Towers, Opp. Himalaya Mall,
              Ahmedabad - 380052
            </p>
            <p>
              <strong>Phone:</strong> +91 98255 88922, +91 99744 42337
            </p>
            <p>
              <strong>Email:</strong> tejashreeproductions@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Tejashree Production. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/share/16M4aBKm19/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/dhananjay.patel.520" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://wa.me/919825588922" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
