import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const colors = ["#FF0000", "#FF8C00", "#FFD700", "#00FF00", "#00BFFF", "#FF00FF"];

export default function UltraFastSlogan() {
  const [explode, setExplode] = useState(false);
  const [showLetters, setShowLetters] = useState(false);
  const slogan = "Prostart brindando soluciones de software a la medida";
  const words = slogan.split(" ");

  useEffect(() => {
    setExplode(true);
    const timer = setTimeout(() => {
      setExplode(false);
      setShowLetters(true);
    }, 800); // Reducido a 800ms para mayor velocidad
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ 
      position: 'relative',
      minHeight: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      overflow: 'hidden',
      textAlign: 'center'
    }}>
      {/* Animación de bomba más rápida */}
      <AnimatePresence>
        {explode && (
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ 
              scale: [1, 1.8, 0],
              opacity: [1, 1, 0],
              rotate: 360
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ 
              duration: 0.8, // Más rápido
              ease: "linear",
              times: [0, 0.7, 1]
            }}
          >
            <span style={{ fontSize: '5rem' }}>💣</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Explosión más rápida */}
      <AnimatePresence>
        {explode && (
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '10px',
              height: '10px',
              background: 'radial-gradient(circle, #FF0000, #FF8C00, transparent)',
              borderRadius: '50%',
              zIndex: 5
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 25, opacity: 0 }}
            transition={{ duration: 0.8, ease: "linear" }} // Más rápido
          />
        )}
      </AnimatePresence>

      {/* Letras ultra rápidas */}
      {showLetters && (
        <motion.div 
          style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            padding: '20px',
            maxWidth: '90%'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }} // Más rápido
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              style={{ 
                color: colors[i % colors.length],
                fontWeight: 800, 
                cursor: 'pointer',
                fontSize: '2.2rem',
                textShadow: '0 0 5px currentColor',
                display: 'inline-block'
              }}
              initial={{
                y: -80,
                rotate: (Math.random() - 0.5) * 180,
                opacity: 0
              }}
              animate={{
                y: 0,
                rotate: 0,
                opacity: 1
              }}
              whileHover={{
                scale: 1.15,
                color: colors[Math.floor(Math.random() * colors.length)],
                transition: { duration: 0.15 } // Más rápido
              }}
              whileTap={{
                scale: 0.9,
                rotate: (Math.random() - 0.5) * 20,
                transition: { duration: 0.1 } // Más rápido
              }}
              transition={{
                delay: 0.3 + i * 0.1, // Más rápido
                type: 'spring',
                stiffness: 300, // Más rígido
                damping: 15,
                bounce: 0.5
              }}
            >
              {word.split('').map((letter, j) => (
                <motion.span
                  key={j}
                  style={{ display: 'inline-block' }}
                  whileHover={{
                    y: [0, -10, 10, 0],
                    rotate: [0, 8, -8, 0],
                    color: colors[Math.floor(Math.random() * colors.length)],
                    transition: {
                      duration: 0.3, // Más rápido
                      repeat: Infinity,
                      repeatType: 'mirror',
                      ease: 'linear',
                      times: [0, 0.25, 0.75, 1]
                    }
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          ))}
        </motion.div>
      )}
    </div>
  );
}