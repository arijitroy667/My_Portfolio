import React, { useEffect, useRef } from "react";

const CAT_COLORS: Record<string, string> = {
  core: "#2dd4bf",     // Teal
  ai: "#a78bfa",       // Purple
  frontend: "#38bdf8", // Light blue
  backend: "#fbbf24",  // Amber
  web3: "#34d399",     // Emerald
  devops: "#fb7185",   // Rose
};

const SKILLS = [
  { id: "ai", cat: "core", label: "AI/ML" },
  { id: "frontend", cat: "core", label: "Frontend" },
  { id: "backend", cat: "core", label: "Backend" },
  { id: "web3", cat: "core", label: "Web3" },
  
  { id: "langchain", cat: "ai", label: "LangChain" },
  { id: "pytorch", cat: "ai", label: "PyTorch" },
  { id: "llms", cat: "ai", label: "LLMs" },
  { id: "agents", cat: "ai", label: "Multi-Agent" },
  { id: "rag", cat: "ai", label: "RAG" },
  { id: "vectordb", cat: "ai", label: "Vector DBs" },
  
  { id: "react", cat: "frontend", label: "React" },
  { id: "nextjs", cat: "frontend", label: "Next.js" },
  { id: "ts", cat: "frontend", label: "TypeScript" },
  { id: "framer", cat: "frontend", label: "Framer Motion" },
  { id: "tailwind", cat: "frontend", label: "Tailwind" },

  { id: "python", cat: "backend", label: "Python" },
  { id: "fastapi", cat: "backend", label: "FastAPI" },
  { id: "nodejs", cat: "backend", label: "Node.js" },
  { id: "golang", cat: "backend", label: "Golang" },
  { id: "mongodb", cat: "backend", label: "MongoDB" },
  { id: "redis", cat: "backend", label: "Redis" },
  { id: "postgres", cat: "backend", label: "PostgreSQL" },

  { id: "solidity", cat: "web3", label: "Solidity" },
  { id: "evm", cat: "web3", label: "EVM" },
  { id: "uniswap", cat: "web3", label: "Uniswap V4" },
  { id: "zk", cat: "web3", label: "ZK Proofs" },
  { id: "ethers", cat: "web3", label: "Ethers.js" },

  { id: "docker", cat: "devops", label: "Docker" },
  { id: "aws", cat: "devops", label: "AWS" },
  { id: "terraform", cat: "devops", label: "Terraform" },
  { id: "ci", cat: "devops", label: "CI/CD" },
];

const EDGES = [
  { from: "ai", to: "langchain" }, { from: "ai", to: "pytorch" }, { from: "ai", to: "llms" }, { from: "ai", to: "agents" }, { from: "ai", to: "rag" }, { from: "ai", to: "vectordb" },
  { from: "frontend", to: "react" }, { from: "frontend", to: "nextjs" }, { from: "frontend", to: "ts" }, { from: "frontend", to: "framer" }, { from: "frontend", to: "tailwind" },
  { from: "backend", to: "python" }, { from: "backend", to: "fastapi" }, { from: "backend", to: "nodejs" }, { from: "backend", to: "golang" }, { from: "backend", to: "mongodb" }, { from: "backend", to: "redis" }, { from: "backend", to: "postgres" },
  { from: "web3", to: "solidity" }, { from: "web3", to: "evm" }, { from: "web3", to: "uniswap" }, { from: "web3", to: "zk" }, { from: "web3", to: "ethers" },
  { from: "devops", to: "docker" }, { from: "devops", to: "aws" }, { from: "devops", to: "terraform" }, { from: "devops", to: "ci" },
  
  // Cross domain connections
  { from: "react", to: "nextjs" }, { from: "ts", to: "react" }, { from: "python", to: "fastapi" }, { from: "python", to: "ai" },
  { from: "langchain", to: "agents" }, { from: "llms", to: "rag" }, { from: "vectordb", to: "rag" },
  { from: "solidity", to: "evm" }, { from: "uniswap", to: "evm" }, { from: "zk", to: "web3" },
  { from: "docker", to: "ci" }, { from: "terraform", to: "aws" }, { from: "nodejs", to: "backend" },
  { from: "ts", to: "nodejs" }, { from: "fastapi", to: "ai" }, { from: "backend", to: "devops" }
];

interface Node3D {
  id: string;
  cat: string;
  label: string;
  bx: number; by: number; bz: number;
  x: number; y: number; z: number;
  sx: number; sy: number; scale: number;
}

const KnowledgeGraph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    
    // Initialize nodes using Fibonacci sphere distribution
    const N = SKILLS.length;
    const nodes: Node3D[] = SKILLS.map((skill, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
      return {
        ...skill,
        bx: Math.cos(theta) * Math.sin(phi),
        by: Math.sin(theta) * Math.sin(phi),
        bz: Math.cos(phi),
        x: 0, y: 0, z: 0, sx: 0, sy: 0, scale: 1
      };
    });

    let velX = 0.001;
    let velY = 0.002;
    const TARGET_VEL_X = 0.001;
    const TARGET_VEL_Y = 0.002;
    
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    
    window.addEventListener("resize", resize);
    resize();

    const getMousePos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const handleDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const pos = getMousePos(e);
      lastMouseX = pos.x;
      lastMouseY = pos.y;
    };

    const handleMove = (e: MouseEvent | TouchEvent) => {
      const pos = getMousePos(e);
      mouseX = pos.x;
      mouseY = pos.y;
      if (isDragging) {
        const dx = pos.x - lastMouseX;
        const dy = pos.y - lastMouseY;
        velY = dx * 0.005; 
        velX = dy * 0.005;
        lastMouseX = pos.x;
        lastMouseY = pos.y;
      }
    };

    const handleUp = () => {
      isDragging = false;
    };

    canvas.addEventListener("mousedown", handleDown);
    canvas.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    
    canvas.addEventListener("touchstart", handleDown, { passive: true });
    canvas.addEventListener("touchmove", handleMove, { passive: true });
    window.addEventListener("touchend", handleUp);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains("dark");
      
      if (!isDragging) {
        velX += (TARGET_VEL_X - velX) * 0.05;
        velY += (TARGET_VEL_Y - velY) * 0.05;
      }

      // Trackball rotation (rotate base coordinates)
      const sinY = Math.sin(velY);
      const cosY = Math.cos(velY);
      const sinX = Math.sin(velX);
      const cosX = Math.cos(velX);

      for (let n of nodes) {
        let rx = n.bx * cosY - n.bz * sinY;
        let rz = n.bx * sinY + n.bz * cosY;
        let ry = n.by * cosX - rz * sinX;
        let finalZ = n.by * sinX + rz * cosX;
        
        n.bx = rx; n.by = ry; n.bz = finalZ;
        n.x = rx; n.y = ry; n.z = finalZ;
      }

      const cx = width / 2;
      const cy = height / 2;
      // Make the sphere responsive
      const RADIUS = Math.min(width, height) * 0.38;
      const FOCAL_LENGTH = 300;

      for (let n of nodes) {
        const scale = FOCAL_LENGTH / (FOCAL_LENGTH + n.z * RADIUS * 0.6);
        n.sx = cx + n.x * RADIUS * scale;
        n.sy = cy + n.y * RADIUS * scale;
        n.scale = scale;
      }

      // Hover detection
      let hoveredNode: Node3D | null = null;
      if (!isDragging) {
        let minDist = 25;
        for (let n of nodes) {
          if (n.z < -0.2) continue; // Don't hover nodes on the back
          const dx = mouseX - n.sx;
          const dy = mouseY - n.sy;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < minDist) {
            minDist = dist;
            hoveredNode = n;
          }
        }
      }

      canvas.style.cursor = isDragging ? "grabbing" : (hoveredNode ? "grab" : "default");

      // Draw edges
      ctx.lineWidth = 1;
      for (let e of EDGES) {
        const n1 = nodes.find(n => n.id === e.from);
        const n2 = nodes.find(n => n.id === e.to);
        if (!n1 || !n2) continue;

        const isHovered = hoveredNode && (hoveredNode.id === n1.id || hoveredNode.id === n2.id);
        const avgZ = (n1.z + n2.z) / 2;
        
        if (avgZ < -0.5 && !isHovered) continue; // cull back edges slightly to reduce clutter

        const alpha = isHovered ? 0.8 : (avgZ > 0 ? 0.15 : 0.05);
        ctx.strokeStyle = isHovered 
          ? CAT_COLORS[hoveredNode!.cat] 
          : (isDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`);
        
        ctx.beginPath();
        ctx.moveTo(n1.sx, n1.sy);
        ctx.lineTo(n2.sx, n2.sy);
        ctx.stroke();
      }

      // Draw nodes
      // Sort by Z for proper 3D rendering order (Painter's algorithm)
      const sortedNodes = [...nodes].sort((a, b) => a.z - b.z);

      for (let n of sortedNodes) {
        const isHovered = hoveredNode === n;
        const isConnected = hoveredNode && EDGES.some(e => (e.from === n.id && e.to === hoveredNode!.id) || (e.to === n.id && e.from === hoveredNode!.id));
        
        const baseRadius = n.cat === "core" ? 4.5 : 3;
        const r = baseRadius * n.scale * (isHovered ? 1.8 : 1);
        
        const alpha = isHovered || isConnected ? 1 : (n.z > 0 ? 0.8 : 0.25);
        
        ctx.fillStyle = CAT_COLORS[n.cat];
        ctx.globalAlpha = alpha;
        
        ctx.beginPath();
        ctx.arc(n.sx, n.sy, r, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect for hovered node
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(n.sx, n.sy, r + 6, 0, Math.PI * 2);
          ctx.fillStyle = CAT_COLORS[n.cat];
          ctx.globalAlpha = 0.3;
          ctx.fill();
        }
        
        // Labels
        const showLabel = isHovered || isConnected || (n.z > 0.85);
        if (showLabel) {
          ctx.globalAlpha = isHovered ? 1 : (alpha * 0.7);
          ctx.font = `${isHovered ? '600' : '400'} ${Math.max(10, 11 * n.scale)}px "Outfit", sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "top";
          ctx.fillStyle = isDark ? "#e2e8f0" : "#334155";
          ctx.fillText(n.label, n.sx, n.sy + r + 6);
        }
      }
      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
      if (canvas) {
        canvas.removeEventListener("mousedown", handleDown);
        canvas.removeEventListener("mousemove", handleMove);
        canvas.removeEventListener("touchstart", handleDown);
        canvas.removeEventListener("touchmove", handleMove);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Background glow */}
      <div className="absolute inset-10 bg-teal-400/5 dark:bg-teal-400/10 blur-3xl rounded-full pointer-events-none" />
      
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-x-4 gap-y-2 pointer-events-none z-10">
        {[
          { cat: "core",     label: "Core" },
          { cat: "ai",       label: "AI/ML" },
          { cat: "frontend", label: "Frontend" },
          { cat: "backend",  label: "Backend" },
          { cat: "web3",     label: "Web3" },
          { cat: "devops",   label: "DevOps" },
        ].map(l => (
          <div key={l.cat} className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: CAT_COLORS[l.cat] }} />
            <span className="font-mono text-[10px] text-gray-500 dark:text-gray-400">{l.label}</span>
          </div>
        ))}
      </div>
      
      <div className="absolute top-4 right-4 pointer-events-none z-10">
        <span className="font-mono text-[10px] text-gray-400 dark:text-charcoal-400 bg-white/50 dark:bg-charcoal-800/50 px-2 py-1 rounded backdrop-blur-sm border border-gray-200 dark:border-charcoal-600">
          drag to rotate
        </span>
      </div>
    </div>
  );
};

export default KnowledgeGraph;
