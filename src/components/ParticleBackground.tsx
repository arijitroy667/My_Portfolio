import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  originalX: number;
  originalY: number;
  waveOffset: number;
  type: 'node' | 'data' | 'energy';
  pulsePhase: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(250, Math.floor((canvas.width * canvas.height) / 6000));
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const type = Math.random() < 0.6 ? 'node' : Math.random() < 0.8 ? 'data' : 'energy';
        
        particles.current.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: type === 'node' ? Math.random() * 3 + 2 : Math.random() * 2 + 1,
          opacity: Math.random() * 0.7 + 0.3,
          waveOffset: Math.random() * Math.PI * 2,
          type,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const animate = () => {
      timeRef.current += 0.015;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create global network grid effect
      const gridSize = 100;
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.03)';
      ctx.lineWidth = 1;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const wave = Math.sin(timeRef.current * 0.5 + x * 0.01 + y * 0.01) * 10;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + gridSize, y + wave);
          ctx.lineTo(x + gridSize + wave, y + gridSize);
          ctx.stroke();
        }
      }
      
      // Animate particles
      particles.current.forEach((particle, index) => {
        // Enhanced wave movement based on particle type
        let waveIntensity = 1;
        if (particle.type === 'energy') waveIntensity = 2;
        if (particle.type === 'data') waveIntensity = 1.5;
        
        const waveX = Math.sin(timeRef.current * 0.6 + particle.waveOffset) * 40 * waveIntensity;
        const waveY = Math.cos(timeRef.current * 0.4 + particle.waveOffset * 1.5) * 30 * waveIntensity;
        
        // Stronger mouse interaction with blockchain-like ripple effects
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let mouseInfluence = 0;
        if (distance < 200) {
          mouseInfluence = (200 - distance) / 200;
          const angle = Math.atan2(dy, dx);
          
          // Create blockchain network expansion effect
          const rippleStrength = mouseInfluence * 80;
          const networkEffect = Math.sin(distance * 0.05 - timeRef.current * 4) * mouseInfluence;
          
          particle.vx += Math.cos(angle + Math.PI) * rippleStrength * 0.008;
          particle.vy += Math.sin(angle + Math.PI) * rippleStrength * 0.008;
          
          // Add network pulse distortion
          particle.x += Math.cos(angle + Math.PI/2) * networkEffect * 30 * 0.1;
          particle.y += Math.sin(angle + Math.PI/2) * networkEffect * 30 * 0.1;
        }

        // Apply enhanced wave movement
        particle.x += particle.vx + waveX * 0.015;
        particle.y += particle.vy + waveY * 0.015;

        // Gentle return to original position with blockchain network behavior
        const returnForceX = (particle.originalX - particle.x) * 0.002;
        const returnForceY = (particle.originalY - particle.y) * 0.002;
        particle.vx += returnForceX;
        particle.vy += returnForceY;

        // Apply friction
        particle.vx *= 0.97;
        particle.vy *= 0.97;

        // Boundary wrapping
        if (particle.x < -100) particle.x = canvas.width + 100;
        if (particle.x > canvas.width + 100) particle.x = -100;
        if (particle.y < -100) particle.y = canvas.height + 100;
        if (particle.y > canvas.height + 100) particle.y = -100;

        // Update pulse phase
        particle.pulsePhase += 0.05;

        // Dynamic opacity and size based on type and activity
        const movement = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        const pulse = Math.sin(particle.pulsePhase) * 0.3 + 0.7;
        const baseOpacity = 0.4 + Math.sin(timeRef.current + particle.waveOffset) * 0.3;
        particle.opacity = Math.min(0.9, baseOpacity + movement * 3 + mouseInfluence * 0.5);

        // Draw particle with type-specific effects
        let colors, glowRadius;
        
        switch (particle.type) {
          case 'node':
            colors = mouseInfluence > 0.3 ? 
              ['rgba(16, 185, 129, ', 'rgba(34, 197, 94, '] : 
              ['rgba(59, 130, 246, ', 'rgba(99, 102, 241, '];
            glowRadius = particle.size * 4;
            break;
          case 'data':
            colors = ['rgba(251, 191, 36, ', 'rgba(245, 158, 11, '];
            glowRadius = particle.size * 3;
            break;
          case 'energy':
            colors = ['rgba(139, 92, 246, ', 'rgba(168, 85, 247, '];
            glowRadius = particle.size * 5;
            break;
        }

        // Create enhanced glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, glowRadius
        );
        
        gradient.addColorStop(0, colors[0] + (particle.opacity * pulse) + ')');
        gradient.addColorStop(0.3, colors[1] + (particle.opacity * pulse * 0.7) + ')');
        gradient.addColorStop(0.7, colors[0] + (particle.opacity * pulse * 0.3) + ')');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = colors[0] + '0.9)';
        ctx.fill();

        // Draw blockchain network connections
        particles.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const connectionOpacity = (1 - distance / 150) * 0.2;
            const dataFlow = Math.sin(timeRef.current * 3 + distance * 0.02) * 0.5 + 0.5;
            
            // Create data flow visualization
            const segments = 20;
            for (let i = 0; i < segments; i++) {
              const t = i / segments;
              const flowOffset = (timeRef.current * 2 + distance * 0.01) % 1;
              const segmentOpacity = Math.max(0, Math.sin((t - flowOffset) * Math.PI * 4)) * connectionOpacity;
              
              if (segmentOpacity > 0.05) {
                const x = particle.x + (otherParticle.x - particle.x) * t;
                const y = particle.y + (otherParticle.y - particle.y) * t;
                
                // Add curve to connection
                const curve = Math.sin(t * Math.PI) * 20 * Math.sin(timeRef.current + distance * 0.01);
                const perpX = -(otherParticle.y - particle.y) / distance;
                const perpY = (otherParticle.x - particle.x) / distance;
                
                ctx.beginPath();
                ctx.arc(x + perpX * curve, y + perpY * curve, 1, 0, Math.PI * 2);
                
                // Color based on particle types
                if (particle.type === 'energy' || otherParticle.type === 'energy') {
                  ctx.fillStyle = `rgba(139, 92, 246, ${segmentOpacity})`;
                } else if (particle.type === 'data' || otherParticle.type === 'data') {
                  ctx.fillStyle = `rgba(251, 191, 36, ${segmentOpacity})`;
                } else {
                  ctx.fillStyle = `rgba(59, 130, 246, ${segmentOpacity})`;
                }
                ctx.fill();
              }
            }
          }
        });
      });

      // Add global network pulse effect
      const pulseRadius = 50 + Math.sin(timeRef.current * 2) * 30;
      const pulseOpacity = (Math.sin(timeRef.current * 2) * 0.5 + 0.5) * 0.1;
      
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, pulseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(16, 185, 129, ${pulseOpacity})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleBackground;