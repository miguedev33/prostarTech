import { motion } from "framer-motion";
import { useState } from "react";
import Maquina from "../img/pc.jpeg";
import Maquinas from "../img/pcs.jpeg";
import Img from "./Imagen";
import "../css/Ambiente.css";

// Componente para animar cada letra individualmente
const AnimatedTitle = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.h1 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: 'inline-block', overflow: 'hidden' }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          style={{ display: 'inline-block' }}
          animate={isHovered ? {
            y: [0, -5],
            scale: [1, 1.2],
            color: ["#000", "#4a90e2"]
          } : {}}
          transition={{
            delay: index * 0.03,
            duration: 0.6,
            type: "spring",
            stiffness: 300
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

function Ambiente() {
  return (
    <section className="work-environment">
      <motion.div 
        className="work-environment-row"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="work-text"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <AnimatedTitle text="Espacio colaborativo" />
          
          <motion.p
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <h3>En Prostart, trabajamos en un ambiente colaborativo y dinámico,
            donde cada miembro del equipo aporta su experiencia y creatividad
            para desarrollar soluciones efectivas.</h3>
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="work-image"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          >
            <Img
              src={Maquina}
              alt="Espacio de trabajo colaborativo"
              className="environment-image"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="work-environment-row reverse"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="work-text"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <AnimatedTitle text="Tecnología de vanguardia" />
          
          <motion.p
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
           <h3> Contamos con equipos de última generación y espacios diseñados
            para fomentar la innovación y la productividad, asegurando que
            podamos cumplir con los plazos y expectativas de nuestros
            clientes.</h3>
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="work-image"
          whileHover={{ scale: 1.05, rotate: -1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <motion.div
            whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          >
            <Img
              src={Maquinas}
              alt="Equipos tecnológicos"
              className="environment-image"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Ambiente;