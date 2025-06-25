import { motion } from "framer-motion";
import React, { useState } from "react";

function AnimatedLetter({ letter, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      style={{ display: "inline-block", cursor: "default" }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.03, type: "spring", stiffness: 100 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      // Aquí: si está hover, animamos la ola; si no, posición fija
      animate={hovered ? { y: [0, -10, 10, 0] } : { y: 0, opacity: 1 }}
      transition={
        hovered
          ? { y: { duration: 0.6, repeat: Infinity, repeatType: "loop" } }
          : { duration: 0.3 }
      }
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  );
}

function AnimatedText({ text }) {
  return (
    <>
      {text.split("").map((letter, i) => (
        <AnimatedLetter key={i} letter={letter} index={i} />
      ))}
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
        <h1
        style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#ffff" }}>
          <AnimatedText text="Bienvenido a Prostart" 
          />
        </h1>
        <div className="content-text">
          <h3
           style={{ color: "#ffff" }}>
            <AnimatedText text="En Prostart, nos especializamos en el desarrollo de software a la medida, ofreciendo soluciones innovadoras y personalizadas para satisfacer las necesidades de nuestros clientes." />
          </h3>
          <h3
          style={{ color: "#ffff" }}>
            <AnimatedText text="Nuestro equipo de expertos está comprometido en brindar un servicio excepcional, asegurando que cada proyecto se entregue a tiempo y con la más alta calidad." />
          </h3>
        </div>
      </div>
    </motion.section>
  );
}
