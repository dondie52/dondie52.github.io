import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Reveal({ 
  children, 
  direction = "up", 
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.3,
  blur = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: 75 };
      case "down":
        return { y: -75 };
      case "left":
        return { x: -75 };
      case "right":
        return { x: 75 };
      case "scale":
        return { scale: 0.8 };
      default:
        return { y: 75 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0 };
      case "left":
      case "right":
        return { x: 0 };
      case "scale":
        return { scale: 1 };
      default:
        return { y: 0 };
    }
  };

  return (
    <div ref={ref}>
      <motion.div
        initial={{ 
          opacity: 0, 
          filter: blur ? "blur(10px)" : "blur(0px)",
          ...getInitialPosition() 
        }}
        animate={isInView ? { 
          opacity: 1, 
          filter: "blur(0px)",
          ...getFinalPosition() 
        } : {}}
        transition={{ 
          duration, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
