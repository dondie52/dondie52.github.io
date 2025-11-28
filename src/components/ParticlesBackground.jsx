import { useCallback, useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "../context/ThemeContext";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        fullScreen: false,
        background: { 
          color: { value: "transparent" } 
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
                color: isDark ? "#06b6d4" : "#0891b2",
              },
            },
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          number: { 
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: isDark 
              ? ["#06b6d4", "#a855f7", "#ec4899"]
              : ["#0891b2", "#7c3aed", "#db2777"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: isDark ? 0.5 : 0.4 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: { 
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: isDark ? "#06b6d4" : "#0891b2",
            opacity: isDark ? 0.15 : 0.1,
            width: 1,
          },
          move: { 
            enable: true,
            speed: 0.8,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out",
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
}
