import { motion } from "framer-motion";

const colors = ["#65fbff", "#65fbff", "#e7e7e7", "#3c7be4", "#6b747a", "#65fbff"];

function explodeColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function Slogan() {
  const slogan = "Prostart brindando soluciones de software a la medida";
  const words = slogan.split(" ");

  return (
    <div className="header-slogan" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ color: explodeColor(), fontWeight: "bold", cursor: "default", fontSize: "2.5rem" }}
          initial={{
            opacity: 0,
            x: (Math.random() - 0.5) * 200, // posición inicial aleatoria en X (entre -100 y 100)
            y: (Math.random() - 0.5) * 200, // posición inicial aleatoria en Y
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: i * 0.15,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
