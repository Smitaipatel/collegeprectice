import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="hero min-h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/img/web100.png')",
      }}
    >
      <motion.div
        className="max-w-2xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Drama, Films and Cultural Events
        </h1>
        <p className="text-lg mb-8">
          Raising public awareness through engaging entertainment experiences
          across Gujarat
        </p>
        <a
          href="#contact"
          className="bg-white text-purple-700 px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition"
        >
          Book Now
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
