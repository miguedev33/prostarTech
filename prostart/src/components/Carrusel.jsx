import React, { useState } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
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

export default function Carrusel() {
  const [selected, setSelected] = useState(null); // índice o null

  return (
    <section className="projects-section">
      
      
      {/* Carrusel horizontal */}
      <div className="horizontal-scroll-wrapper">
        {images.map((img, i) => (
          <div 
            key={i} 
            className="scroll-item" 
            onClick={() => setSelected(i)} 
            style={{ cursor: "pointer" }}
          >
            <img src={img.src} alt={img.alt} />
          </div>
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
            onClick={() => setSelected(null)} // cerrar al click en fondo
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
              key={images[selected].src}
              src={images[selected].src} 
              alt={images[selected].alt}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={e => e.stopPropagation()} // evitar cerrar al click en la imagen
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
