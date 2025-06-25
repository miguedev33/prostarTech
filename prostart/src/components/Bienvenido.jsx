import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function AnimatedText({ text, typingSpeed = 30, delay = 0 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, typingSpeed]);

  return (
    <>
      {displayedText.split("").map((letter, i) => (
        <motion.span
          key={i}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + (i * 0.03), type: "spring", stiffness: 100 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      {/* Cursor parpadeante */}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ display: "inline-block" }}
        >
          |
        </motion.span>
      )}
    </>
  );
}

export default function HeroSection() {
  return (
    <motion.section
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="main-content">
        <h1 style={{ fontSize: "2.0rem", marginBottom: "1rem", color: "#ffff" }}>
          <AnimatedText 
            text="Bienvenido a Prostart" 
            typingSpeed={80}
          />
        </h1>
        <div className="content-text">
          <h3 style={{ color: "#ffff" }}>
            <AnimatedText 
              text="En Prostart, nos especializamos en el desarrollo de software a la medida, ofreciendo soluciones innovadoras y personalizadas para satisfacer las necesidades de nuestros clientes." 
              typingSpeed={50}
              delay={1.5} // Retraso para que empiece después del título
            />
          </h3>
          <h3 style={{ color: "#ffff" }}>
            <AnimatedText 
              text="Nuestro equipo de expertos está comprometido en brindar un servicio excepcional, asegurando que cada proyecto se entregue a tiempo y con 
              la más alta calidad." 
              typingSpeed={50}
              delay={3.5} // Retraso para que empiece después del primer párrafo
            />
          </h3>
        </div>
      </div>
    </motion.section>
  );
}