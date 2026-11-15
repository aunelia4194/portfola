"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

interface IPetal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angle: number;
  spin: number;
  maxOpacity: number;
  currentOpacity: number;
  originCorner: "left" | "right";
  reset: (startIndex?: number) => void;
  update: () => void;
  draw: () => void;
}

export default function Sakura() {
  const { resolvedTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Active l'animation uniquement côté client et en mode clair
    if (!mounted || resolvedTheme !== "light") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const petalCount = 8;
    const petals: IPetal[] = [];

    class Petal implements IPetal {
      x!: number;
      y!: number;
      size!: number;
      speedY!: number;
      speedX!: number;
      angle!: number;
      spin!: number;
      maxOpacity!: number;
      currentOpacity!: number;
      originCorner!: "left" | "right";

      constructor(index: number) {
        this.reset(index);
      }

      reset(startIndex = -1) {
        this.originCorner = Math.random() > 0.5 ? "left" : "right";

        const currentWidth = canvas?.width ?? window.innerWidth;
        const currentHeight = canvas?.height ?? window.innerHeight;

        if (this.originCorner === "left") {
          this.x = Math.random() * 50 - 20;
          this.y =
            startIndex >= 0
              ? -(startIndex * (currentHeight / petalCount)) - 20
              : Math.random() * 50 - 20;
          this.speedX = Math.random() * 1.0 + 0.8;
        } else {
          this.x = currentWidth - Math.random() * 50 + 20;
          this.y =
            startIndex >= 0
              ? -(startIndex * (currentHeight / petalCount)) - 20
              : Math.random() * 50 - 20;
          this.speedX = -(Math.random() * 1.0 + 0.8);
        }

        this.size = Math.random() * 4 + 8;
        this.speedY = Math.random() * 0.8 + 0.9;
        this.angle = Math.random() * 360;
        this.spin = Math.random() * 0.02 - 0.01;
        this.maxOpacity = Math.random() * 0.2 + 0.5;
        this.currentOpacity = 0;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y / 30) * 0.3;
        this.angle += this.spin;

        if (this.y > -10 && this.currentOpacity < this.maxOpacity) {
          this.currentOpacity += 0.01;
        }

        const currentWidth = canvas?.width ?? window.innerWidth;
        const currentHeight = canvas?.height ?? window.innerHeight;

        if (
          this.y > currentHeight + 20 ||
          this.x > currentWidth + 40 ||
          this.x < -40
        ) {
          this.reset();
        }
      }

      draw() {
        if (!ctx || this.y < -this.size || this.currentOpacity <= 0) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);

        // Forme du pétale
        ctx.beginPath();
        ctx.moveTo(0, this.size);
        ctx.bezierCurveTo(
          -this.size * 1.2,
          this.size * 0.4,
          -this.size * 0.9,
          -this.size * 0.7,
          -this.size * 0.3,
          -this.size
        );
        ctx.lineTo(0, -this.size * 0.6);
        ctx.lineTo(this.size * 0.3, -this.size);
        ctx.bezierCurveTo(
          this.size * 0.9,
          -this.size * 0.7,
          this.size * 1.2,
          this.size * 0.4,
          0,
          this.size
        );
        ctx.closePath();

        ctx.fillStyle = `rgba(255, 185, 198, ${this.currentOpacity})`;
        ctx.fill();

        // Nervure centrale
        ctx.beginPath();
        ctx.moveTo(0, this.size * 0.8);
        ctx.lineTo(0, -this.size * 0.2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.currentOpacity * 0.3})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();

        ctx.restore();
      }
    }

    for (let i = 0; i < petalCount; i++) {
      petals.push(new Petal(i));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petals.forEach((petal) => {
        petal.update();
        petal.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted, resolvedTheme]);

  if (!mounted || resolvedTheme !== "light") return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    />
  );
}
