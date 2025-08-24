// src/App.js
import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Animate elements on scroll
    const animateOnIntersection = (element, delay) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      observer.observe(element);
      return observer;
    };

    document
      .querySelectorAll(".fade-in, .fade-in-up, .fade-in-left, .fade-in-right")
      .forEach((el, index) => {
        animateOnIntersection(el, (index % 4) * 100);
      });

    document.querySelectorAll(".service-card").forEach((card, index) => {
      card.classList.add("fade-in-up");
      animateOnIntersection(card, (index % 3) * 200);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId.length > 1) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="overflow-x-hidden font-roboto bg-light text-dark">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src="img/logo2.png" alt="Logo" className="h-10" />
            <span className="font-bold text-xl text-gray-800">
              Tejashree Production
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8 font-medium">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="Video.html" className="nav-link">Video</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a href="#contact" className="btn-primary hidden md:block">
            Request Proposal
          </a>
          <button className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('img/web110.png')",
        }}
      >
        <div className="max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Drama, Films and Cultural events
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
              alt="Team performing a traditional Gujarati dance on stage"
              className="rounded-lg overflow-hidden shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="mb-4">
              At Tejashree Production, we specialize in professional entertainment programs that go beyond performance – creating awareness, connecting communities, and inspiring change.
            </p>
            <ul className="space-y-3">
              <li>✔️ 30+ Years of Industry Experience</li>
              <li>✔️ 1000+ Shows done in last six months</li>
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
            {[
              {
                title: "Professional Dramas",
                desc: "Thought-provoking theatrical performances that entertain while addressing social issues. Our dramas are professionally scripted and performed by trained actors.",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08f09f0b-28d0-4b11-bf0a-fee762f44d37.png",
              },
              {
                title: "Street Shows",
                desc: "Engaging public performances including traditional forms like Bhavai, Dayro, and Garba that bring communities together while spreading important messages.",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0ec6e42-9fa3-42d6-b2b8-6e5297399459.png",
              },
              {
                title: "Cultural Programs",
                desc: "Composite cultural performances showcasing the diversity of Gujarat's artistic traditions including dance, music, and theater.",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9b9b106-cb57-4b62-9abf-14944f4cb0dd.png",
              },
              {
                title: "Garba & Dandiya Nights",
                desc: "Festive dance events featuring professional dancers and musicians to celebrate Navratri and other cultural events with authentic Gujarati spirit.",
                img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b1eed91-37fa-4bab-91ed-3d94e440c70f.png",
              },
            ].map((s, i) => (
              <div key={i} className="service-card bg-white">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 16 }, (_, i) => (
              <img
                key={i}
                src={`img/web${i + 2}.jpg`}
                alt="Event"
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="mb-4">We would love to discuss how we can make your event memorable and impactful.</p>
            <p><strong>Address:</strong> C/804, Shreeji Towers, Opp. Himalaya Mall, Ahmedabad - 380052</p>
            <p><strong>Phone:</strong> +91 98255 88922, +91 99744 42337</p>
            <p><strong>Email:</strong> tejashreeproductions@gmail.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Tejashree Production. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Facebook */}
            <a href="https://www.facebook.com/share/16M4aBKm19/" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351c0 .731.593 1.324 
                1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 
                1.893-4.788 4.659-4.788 1.325 0 2.463.099 
                2.795.143v3.24l-1.918.001c-1.504 
                0-1.795.715-1.795 1.763v2.313h3.587l-.467 
                3.622h-3.12v9.293h6.116c.73 0 
                1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/dhananjay.patel.520" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 
                4.85.07 3.252.148 4.771 1.691 
                4.919 4.919.058 1.265.069 
                1.645.069 4.849 0 3.205-.012 
                3.584-.069 4.849-.149 3.225-1.664 
                4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 
                0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 
                0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 
                4.919-4.919 1.266-.057 1.645-.069 
                4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 
                2.618-6.98 6.98-.059 1.281-.073 
                1.689-.073 4.948 0 3.259.014 
                3.668.072 4.948.2 4.358 2.618 
                6.78 6.98 6.98 1.281.058 1.689.072 
                4.948.072 3.259 0 3.668-.014 
                4.948-.072 4.354-.2 6.782-2.618 
                6.979-6.98.059-1.28.073-1.689.073-4.948 
                0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 
                5.838c-3.403 0-6.162 2.759-6.162 
                6.162s2.759 6.163 6.162 
                6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 
                10.162c-2.209 0-4-1.79-4-4 0-2.209 
                1.791-4 4-4s4 1.791 4 4c0 
                2.21-1.791 4-4 4zm6.406-11.845c-.796 
                0-1.441.645-1.441 1.44s.645 1.44 
                1.441 1.44c.795 0 1.439-.645 
                1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/919825588922" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 
                1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 
                2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 
                2.096 3.2 5.077 4.487.709.306 1.262.489 
                1.694.625.712.227 1.36.195 1.871.118.571-.085 
                1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.33-11.29c-5.516 
                0-9.987 4.471-9.987 9.987 0 1.902.53 
                3.731 1.522 5.315L2.09 21.535l4.32-1.258a9.985 
                9.985 0 0 0 4.72 1.183h.004c5.515 
                0 9.986-4.473 9.986-9.988 0-5.517-4.472-9.988-9.99-9.988"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}