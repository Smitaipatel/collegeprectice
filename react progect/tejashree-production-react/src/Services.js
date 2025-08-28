import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Professional Dramas",
    desc: "Thought-provoking theatrical performances that entertain while addressing social issues.",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/08f09f0b-28d0-4b11-bf0a-fee762f44d37.png",
  },
  {
    title: "Street Shows",
    desc: "Engaging public performances including traditional forms like Bhavai, Dayro, and Garba.",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f0ec6e42-9fa3-42d6-b2b8-6e5297399459.png",
  },
  {
    title: "Cultural Programs",
    desc: "Composite cultural performances showcasing the diversity of Gujarat's artistic traditions.",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f9b9b106-cb57-4b62-9abf-14944f4cb0dd.png",
  },
  {
    title: "Garba & Dandiya Nights",
    desc: "Festive dance events with professional dancers and musicians for Navratri and cultural events.",
    img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2b1eed91-37fa-4bab-91ed-3d94e440c70f.png",
  },
];

function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="service-card bg-white rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
