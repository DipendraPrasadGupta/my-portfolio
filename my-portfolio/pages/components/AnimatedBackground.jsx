import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function AnimatedBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0d0d0d", // Dark, premium background
        },
        fullScreen: {
          enable: true,
          zIndex: -1, // Keep it behind all content
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["grab", "bubble"],
              parallax: {
                enable: true,
                force: 60,
                smooth: 10
              }
            },
            onClick: {
              enable: true,
              mode: ["push", "repulse"],
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.8,
                color: "#ff00ff"
              }
            },
            bubble: {
              distance: 200,
              size: 12,
              duration: 2,
              opacity: 0.8,
              color: {
                value: ["#ff0000", "#00ff00", "#0000ff"]
              }
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              factor: 100,
              speed: 1,
              maxSpeed: 50,
            },
            push: {
              quantity: 6,
              particles: {
                color: {
                  value: ["#ff00ff", "#00ffff", "#ffff00"]
                },
                size: {
                  value: 8
                }
              }
            },
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: { 
            value: ["#00f2ff", "#ff00e5", "#ffd500", "#00ff88", "#ff8800"],
            animation: {
              enable: true,
              speed: 20,
              sync: false
            }
          },
          shape: { 
            type: ["circle", "triangle", "star"],
            options: {
              star: {
                sides: 5
              }
            }
          },
          opacity: {
            value: 0.6,
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 5 },
            random: true,
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 0.3,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: { min: 1, max: 3 },
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200,
            },
            trail: {
              enable: true,
              length: 4,
              fillColor: "#000000"
            },
            wobble: {
              enable: true,
              distance: 10,
              speed: 10
            }
          },
        },
        detectRetina: true,
      }}
    />
  );
}
