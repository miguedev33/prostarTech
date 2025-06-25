import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cerdonImg from '../img/cerdon.jpeg';
import clinicaImg from '../img/clinica.jpeg';
import codiam from '../img/codiam.jpeg';
import dialcaImfg from '../img/dialca.PNG';
import serviciosImg from '../img/serviciog.PNG';
import "../css/carrusel.css";

const images = [
  { src: cerdonImg, alt: "Proyecto Cerdon" },
  { src: clinicaImg, alt: "Proyecto Clínica" },
  { src: codiam, alt: "Proyecto Codiam" },
  { src: dialcaImfg, alt: "Proyecto Dialca" },
  { src: serviciosImg, alt: "Proyecto Servicios" },
];

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.8
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function ScrollTriggeredCarousel() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="projects-section">
      <div className="scroll-triggered-container">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.5 }}
            onClick={() => setSelected(i)}
          >
            <div className="splash" />
            <motion.div className="card" variants={cardVariants}>
              <img 
                src={img.src} 
                alt={img.alt}
                className="card-image"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal de imagen expandida */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div 
            className="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              cursor: "pointer"
            }}
          >
            <motion.img 
              src={images[selected].src} 
              alt={images[selected].alt}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                borderRadius: "12px",
                boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                cursor: "auto"
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}