'use client';

import { useEffect, useRef } from 'react';

interface GridDistortionProps {
  imageSrc: string;
  grid?: number;
  mouse?: number;
  strength?: number;
  relaxation?: number;
  className?: string;
}

export default function GridDistortion({
  imageSrc,
  grid = 10,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
  className = '',
}: GridDistortionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const verticesRef = useRef<{ x: number; y: number; baseX: number; baseY: number }[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Load image
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageSrc;
    imageRef.current = img;

    img.onload = () => {
      // Set canvas size
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      // Initialize grid vertices
      const vertices: { x: number; y: number; baseX: number; baseY: number }[] = [];
      const cols = grid;
      const rows = Math.floor((canvas.height / canvas.width) * grid);
      const cellWidth = canvas.width / cols;
      const cellHeight = canvas.height / rows;

      for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= cols; j++) {
          const x = j * cellWidth;
          const y = i * cellHeight;
          vertices.push({ x, y, baseX: x, baseY: y });
        }
      }
      verticesRef.current = vertices;

      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update vertices based on mouse position
        verticesRef.current.forEach((vertex) => {
          const dx = mouseRef.current.x - vertex.x;
          const dy = mouseRef.current.y - vertex.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = canvas.width * mouse;

          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * strength * 100;
            vertex.x += dx * force * 0.01;
            vertex.y += dy * force * 0.01;
          }

          // Relaxation - return to base position
          vertex.x += (vertex.baseX - vertex.x) * relaxation * 0.1;
          vertex.y += (vertex.baseY - vertex.y) * relaxation * 0.1;
        });

        // Draw distorted grid
        const cols = grid;
        const rows = Math.floor((canvas.height / canvas.width) * grid);

        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            const idx0 = i * (cols + 1) + j;
            const idx1 = i * (cols + 1) + j + 1;
            const idx2 = (i + 1) * (cols + 1) + j + 1;
            const idx3 = (i + 1) * (cols + 1) + j;

            const v0 = verticesRef.current[idx0];
            const v1 = verticesRef.current[idx1];
            const v2 = verticesRef.current[idx2];
            const v3 = verticesRef.current[idx3];

            if (!v0 || !v1 || !v2 || !v3) continue;

            // Calculate UV coordinates
            const cellWidth = canvas.width / cols;
            const cellHeight = canvas.height / rows;
            const u0 = j * cellWidth;
            const v0y = i * cellHeight;
            const u1 = (j + 1) * cellWidth;
            const v1y = (i + 1) * cellHeight;

            // Draw textured quad
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(v0.x, v0.y);
            ctx.lineTo(v1.x, v1.y);
            ctx.lineTo(v2.x, v2.y);
            ctx.lineTo(v3.x, v3.y);
            ctx.closePath();
            ctx.clip();

            // Draw image portion
            if (imageRef.current) {
              const imgWidth = imageRef.current.width;
              const imgHeight = imageRef.current.height;
              
              ctx.drawImage(
                imageRef.current,
                (u0 / canvas.width) * imgWidth,
                (v0y / canvas.height) * imgHeight,
                (cellWidth / canvas.width) * imgWidth,
                (cellHeight / canvas.height) * imgHeight,
                v0.x,
                v0.y,
                v1.x - v0.x,
                v3.y - v0.y
              );
            }
            ctx.restore();
          }
        }

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    };

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [imageSrc, grid, mouse, strength, relaxation]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: 'block' }}
    />
  );
}
