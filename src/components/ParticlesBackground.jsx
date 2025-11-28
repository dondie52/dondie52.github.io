import { useCallback, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [particlesEnabled] = useState(true);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (!particlesEnabled) return null;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
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
                color: "#06b6d4",
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
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#06b6d4", "#a855f7", "#ec4899"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
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
            color: "#06b6d4",
            opacity: 0.15,
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
