import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  Twitter,
} from "lucide-react";
import * as THREE from "three";

const HeroSection: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 450 / 450, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(450, 450);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create blockchain network elements
    const nodes = [];
    const connections = [];
    const dataBlocks = [];
    const rings = [];
    let coreNode;

    // Create central core node
    const coreGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.9,
      wireframe: false,
    });

    coreNode = new THREE.Mesh(coreGeometry, coreMaterial);
    coreNode.position.set(0, 0, 0);
    coreNode.userData = {
      isCore: true,
      pulseSpeed: 0.05,
      pulseOffset: 0,
      energyLevel: 1.0,
      rotationSpeed: 0.01,
    };
    scene.add(coreNode);

    // Create spherical arrangement of blockchain nodes
    const totalNodes = 32; // Increased node count for a denser sphere
    const sphereRadius = 2.5;
    const nodesPerLayer = 8;
    const layerCount = totalNodes / nodesPerLayer;

    for (let layer = 0; layer < layerCount; layer++) {
      const layerAngle = (Math.PI * (layer + 1)) / (layerCount + 1);
      const layerHeight = sphereRadius * Math.cos(layerAngle);
      const layerRadius = sphereRadius * Math.sin(layerAngle);

      for (let i = 0; i < nodesPerLayer; i++) {
        const angle = (i / nodesPerLayer) * Math.PI * 2;
        const x = layerRadius * Math.cos(angle);
        const z = layerRadius * Math.sin(angle);
        const y = layerHeight;

        // Create node
        const nodeGeometry = new THREE.BoxGeometry(0.25, 0.25, 0.25);
        const nodeMaterial = new THREE.MeshBasicMaterial({
          color: getLayerColor(layer),
          transparent: true,
          opacity: 0.8,
          wireframe: false,
        });

        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(x, y, z);

        node.userData = {
          originalPosition: new THREE.Vector3(x, y, z),
          layer: layer,
          index: i,
          pulseSpeed: 0.03 + Math.random() * 0.02,
          pulseOffset: Math.random() * Math.PI * 2,
          rotationSpeed: 0.01 + Math.random() * 0.01,
          orbitSpeed: 0.002 + Math.random() * 0.002,
          orbitOffset: Math.random() * Math.PI * 2,
          orbitRadius: 0.1 + Math.random() * 0.2,
          chainLength: 2 + Math.floor(Math.random() * 3),
        };

        nodes.push(node);
        scene.add(node);

        // Create connection from core to node
        const points = [
          new THREE.Vector3(0, 0, 0), // Core position
          node.position.clone(), // Node position
        ];

        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: getLayerColor(layer),
          transparent: true,
          opacity: 0.3,
        });

        const connection = new THREE.Line(lineGeometry, lineMaterial);
        connection.userData = {
          fromCore: true,
          toNode: nodes.length - 1,
          pulseSpeed: 0.03 + Math.random() * 0.02,
          pulsePhase: Math.random() * Math.PI * 2,
          dataFlowOffset: Math.random(),
          activity: Math.random(),
        };

        connections.push(connection);
        scene.add(connection);

        // Create mini blockchain (small chain of blocks) for each node
        createNodeChain(scene, node, layer);
      }
    }

    // Create connections between adjacent nodes in the same layer
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const layer = node.userData.layer;
      const index = node.userData.index;

      // Connect to the next node in the same layer
      const nextIndex = (index + 1) % nodesPerLayer;
      let nextNodeIndex = -1;

      // Find the next node in the same layer
      for (let j = 0; j < nodes.length; j++) {
        if (
          nodes[j].userData.layer === layer &&
          nodes[j].userData.index === nextIndex
        ) {
          nextNodeIndex = j;
          break;
        }
      }

      if (nextNodeIndex >= 0) {
        const nextNode = nodes[nextNodeIndex];

        // Create connection between adjacent nodes
        const points = [node.position.clone(), nextNode.position.clone()];

        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: getLayerColor(layer),
          transparent: true,
          opacity: 0.2,
        });

        const connection = new THREE.Line(lineGeometry, lineMaterial);
        connection.userData = {
          fromNode: i,
          toNode: nextNodeIndex,
          pulseSpeed: 0.02 + Math.random() * 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
          dataFlowOffset: Math.random(),
        };

        connections.push(connection);
        scene.add(connection);
      }
    }

    // Create some cross-layer connections for more complexity
    for (let i = 0; i < 16; i++) {
      const node1Index = Math.floor(Math.random() * nodes.length);
      const node2Index = Math.floor(Math.random() * nodes.length);

      // Avoid self-connections and ensure different layers
      if (
        node1Index !== node2Index &&
        nodes[node1Index].userData.layer !== nodes[node2Index].userData.layer
      ) {
        const points = [
          nodes[node1Index].position.clone(),
          nodes[node2Index].position.clone(),
        ];

        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
        const lineMaterial = new THREE.LineBasicMaterial({
          color: 0x8b5cf6, // Purple for cross-layer connections
          transparent: true,
          opacity: 0.15,
        });

        const connection = new THREE.Line(lineGeometry, lineMaterial);
        connection.userData = {
          fromNode: node1Index,
          toNode: node2Index,
          pulseSpeed: 0.01 + Math.random() * 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
          dataFlowOffset: Math.random(),
        };

        connections.push(connection);
        scene.add(connection);
      }
    }

    // Create energy spheres that radiate from the core
    for (let i = 0; i < 3; i++) {
      const ringGeometry = new THREE.RingGeometry(0.1, 0.12, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;

      ring.userData = {
        scale: 0.1,
        maxScale: 3.0 + i * 0.5,
        growthSpeed: 0.02 + i * 0.005,
        opacity: 0.3,
      };

      rings.push(ring);
      scene.add(ring);
    }

    // Create data blocks (transactions) that travel along connections
    for (let i = 0; i < 24; i++) {
      const blockGeometry = new THREE.BoxGeometry(0.08, 0.08, 0.08);
      const blockMaterial = new THREE.MeshBasicMaterial({
        color: getDataBlockColor(i % 4),
        transparent: true,
        opacity: 0.8,
        wireframe: false,
      });

      const dataBlock = new THREE.Mesh(blockGeometry, blockMaterial);

      // Randomly assign to connections - from core or between nodes
      const usesCoreConnection = Math.random() < 0.7;
      let connectionPool = connections.filter(
        (c) => c.userData.fromCore === usesCoreConnection
      );

      if (connectionPool.length === 0) {
        connectionPool = connections;
      }

      const connectionIndex = Math.floor(Math.random() * connectionPool.length);
      const connection = connectionPool[connectionIndex];

      dataBlock.userData = {
        connectionIndex: connections.indexOf(connection),
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.007,
        glowPhase: Math.random() * Math.PI * 2,
        isProcessed: false,
        processingPhase: 0,
        transactionType: ["transfer", "swap", "mint", "stake"][i % 4],
        startTime: Date.now() - Math.random() * 5000,
      };

      dataBlocks.push(dataBlock);
      scene.add(dataBlock);
    }

    // Create a central energy core glow effect
    const coreLight = new THREE.PointLight(0x10b981, 1, 10);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Add subtle ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    // Position camera slightly offset for better perspective
    camera.position.set(4, 3, 4);
    camera.lookAt(0, 0, 0);

    let time = 0;
    let rotationGroup = new THREE.Group();
    scene.add(rotationGroup);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Rotate entire blockchain sphere
      scene.rotation.y += 0.002;

      // Animate core node
      const corePulse = 1 + Math.sin(time * coreNode.userData.pulseSpeed) * 0.2;
      coreNode.scale.setScalar(corePulse);

      // Create pulsing energy effect for core
      coreNode.rotation.y += coreNode.userData.rotationSpeed;
      coreNode.rotation.x += coreNode.userData.rotationSpeed * 0.7;
      coreLight.intensity = 0.7 + Math.sin(time * 2) * 0.3;

      // Glow color cycling for core
      const coreHue = (time * 0.02) % 1;
      const coreColor = new THREE.Color().setHSL(coreHue, 0.7, 0.5);
      coreNode.material.color.lerp(coreColor, 0.02);

      // Animate rings radiating from core
      rings.forEach((ring, i) => {
        const userData = ring.userData;

        userData.scale += userData.growthSpeed;
        if (userData.scale > userData.maxScale) {
          userData.scale = 0.1;
          userData.opacity = 0.3;
        }

        ring.scale.set(userData.scale, userData.scale, userData.scale);

        // Fade out as it expands
        userData.opacity = 0.3 * (1 - userData.scale / userData.maxScale);
        ring.material.opacity = userData.opacity;

        // Slight rotation for dynamic effect
        ring.rotation.z += 0.005 * (i + 1);
      });

      // Animate blockchain nodes
      nodes.forEach((node, index) => {
        const userData = node.userData;

        // Orbital movement around original position
        const orbitAngle = time * userData.orbitSpeed + userData.orbitOffset;
        const xOffset = Math.cos(orbitAngle) * userData.orbitRadius;
        const yOffset = Math.sin(orbitAngle) * userData.orbitRadius;
        const zOffset = Math.sin(orbitAngle * 1.5) * userData.orbitRadius * 0.5;

        node.position.set(
          userData.originalPosition.x + xOffset,
          userData.originalPosition.y + yOffset,
          userData.originalPosition.z + zOffset
        );

        // Node rotation and pulsing
        node.rotation.x += userData.rotationSpeed;
        node.rotation.y += userData.rotationSpeed * 1.2;
        node.rotation.z += userData.rotationSpeed * 0.8;

        const pulse =
          1 +
          Math.sin(time * userData.pulseSpeed + userData.pulseOffset) * 0.15;
        node.scale.setScalar(pulse);

        // Activity-based color changes
        const activity = Math.sin(time * 0.5 + index) * 0.5 + 0.5;
        if (activity > 0.8) {
          node.material.color.lerp(new THREE.Color(0x10b981), 0.05); // Green for active
        } else if (activity > 0.5) {
          node.material.color.lerp(new THREE.Color(0xfbbf24), 0.05); // Yellow for medium
        } else {
          node.material.color.lerp(
            new THREE.Color(getLayerColor(userData.layer)),
            0.05
          ); // Base color
        }
      });

      // Update all connections
      connections.forEach((connection, index) => {
        const userData = connection.userData;

        // Update points if connection links to nodes that move
        if (userData.fromCore) {
          // Core to node connections
          const nodeIndex = userData.toNode;
          const node = nodes[nodeIndex];

          const points = [
            new THREE.Vector3(0, 0, 0), // Core position
            node.position.clone(), // Node position
          ];

          connection.geometry.dispose();
          connection.geometry = new THREE.BufferGeometry().setFromPoints(
            points
          );
        } else if (
          userData.fromNode !== undefined &&
          userData.toNode !== undefined
        ) {
          // Node to node connections
          const fromNode = nodes[userData.fromNode];
          const toNode = nodes[userData.toNode];

          const points = [fromNode.position.clone(), toNode.position.clone()];

          connection.geometry.dispose();
          connection.geometry = new THREE.BufferGeometry().setFromPoints(
            points
          );
        }

        // Animate connection pulses
        userData.pulsePhase += 0.02;
        const pulse = Math.sin(userData.pulsePhase) * 0.5 + 0.5;
        connection.material.opacity = 0.1 + pulse * 0.2;

        // Color shift based on activity
        if (pulse > 0.8) {
          connection.material.color.lerp(new THREE.Color(0x10b981), 0.05); // Green for high activity
        } else if (pulse > 0.5) {
          connection.material.color.lerp(new THREE.Color(0xfbbf24), 0.05); // Yellow for medium
        }
      });

      // Animate data blocks (transactions)
      dataBlocks.forEach((dataBlock, index) => {
        const userData = dataBlock.userData;

        if (!userData.isProcessed) {
          // Transaction in transit
          const connection = connections[userData.connectionIndex];

          if (connection) {
            // Progress transaction along connection
            userData.progress += userData.speed;

            if (userData.progress > 1) {
              // Transaction reached destination - process it
              userData.isProcessed = true;
              userData.processingPhase = 0;

              // Add visual effect at destination
              createProcessingEffect(scene, dataBlock.position.clone());

              // Reset for a new transaction after delay
              setTimeout(() => {
                // Choose a new connection
                const usesCoreConnection = Math.random() < 0.7;
                let connectionPool = connections.filter(
                  (c) => c.userData.fromCore === usesCoreConnection
                );

                if (connectionPool.length === 0) {
                  connectionPool = connections;
                }

                const connectionIndex = Math.floor(
                  Math.random() * connectionPool.length
                );
                const newConnection = connectionPool[connectionIndex];

                userData.isProcessed = false;
                userData.progress = 0;
                userData.connectionIndex = connections.indexOf(newConnection);
                userData.transactionType = [
                  "transfer",
                  "swap",
                  "mint",
                  "stake",
                ][Math.floor(Math.random() * 4)];
              }, 2000 + Math.random() * 3000);
            }

            // Position data block along the connection
            let startPos, endPos;

            if (connection.userData.fromCore) {
              startPos = new THREE.Vector3(0, 0, 0); // Core
              endPos = nodes[connection.userData.toNode].position.clone();
            } else if (connection.userData.fromNode !== undefined) {
              startPos = nodes[connection.userData.fromNode].position.clone();
              endPos = nodes[connection.userData.toNode].position.clone();
            } else {
              startPos = new THREE.Vector3(0, 0, 0);
              endPos = new THREE.Vector3(0, 0, 0);
            }

            // Add curve to path
            const pathCenter = new THREE.Vector3()
              .addVectors(startPos, endPos)
              .multiplyScalar(0.5);
            const distance = startPos.distanceTo(endPos);

            // Create arc in movement
            const liftAmount =
              distance * 0.2 * Math.sin(userData.progress * Math.PI);
            pathCenter.y += liftAmount;

            // Bezier curve movement
            const t = userData.progress;
            const tInv = 1 - t;

            dataBlock.position.x =
              tInv * tInv * startPos.x +
              2 * tInv * t * pathCenter.x +
              t * t * endPos.x;
            dataBlock.position.y =
              tInv * tInv * startPos.y +
              2 * tInv * t * pathCenter.y +
              t * t * endPos.y;
            dataBlock.position.z =
              tInv * tInv * startPos.z +
              2 * tInv * t * pathCenter.z +
              t * t * endPos.z;

            // Rotate block during transit
            dataBlock.rotation.x += 0.05;
            dataBlock.rotation.y += 0.07;

            // Visual effects for transaction
            userData.glowPhase += 0.1;
            const glow = Math.sin(userData.glowPhase) * 0.5 + 0.5;
            dataBlock.scale.setScalar(0.08 + glow * 0.04);

            // Color based on transaction type
            const transactionColor = getDataBlockColor(
              userData.transactionType === "transfer"
                ? 0
                : userData.transactionType === "swap"
                ? 1
                : userData.transactionType === "mint"
                ? 2
                : 3
            );

            dataBlock.material.color.set(transactionColor);

            // Trail effect based on speed
            if (Math.random() < userData.speed * 20) {
              createTrailEffect(
                scene,
                dataBlock.position.clone(),
                dataBlock.material.color
              );
            }
          }
        } else {
          // Transaction is being processed - hide it
          dataBlock.visible = false;

          // Reset after processing complete
          userData.processingPhase += 0.05;
          if (userData.processingPhase > 1) {
            dataBlock.visible = true;
          }
        }
      });

      renderer.render(scene, camera);
    };

    // Helper function to create blockchain chains attached to nodes
    function createNodeChain(scene, parentNode, layer) {
      const chainLength = parentNode.userData.chainLength;
      const blocks = [];

      // Direction vector pointing away from center
      const dirVector = new THREE.Vector3()
        .copy(parentNode.position)
        .normalize()
        .multiplyScalar(0.2);

      for (let i = 0; i < chainLength; i++) {
        const blockGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.15);
        const blockMaterial = new THREE.MeshBasicMaterial({
          color: getBlockColor(layer, i),
          transparent: true,
          opacity: 0.7,
          wireframe: false,
        });

        const block = new THREE.Mesh(blockGeometry, blockMaterial);

        // Position in chain extending from node
        block.position
          .copy(parentNode.position)
          .add(dirVector.clone().multiplyScalar(i + 1));

        block.userData = {
          parentNode: parentNode,
          chainIndex: i,
          originalOffset: dirVector.clone().multiplyScalar(i + 1),
          pulseSpeed: 0.04 + Math.random() * 0.02,
          rotSpeed: 0.01 + Math.random() * 0.01,
        };

        blocks.push(block);
        scene.add(block);
      }

      // Store reference in parent node
      parentNode.userData.blockChain = blocks;
    }

    // Helper function to create trail effects
    function createTrailEffect(scene, position, color) {
      const trailGeometry = new THREE.SphereGeometry(0.03, 8, 8);
      const trailMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.7,
      });

      const trail = new THREE.Mesh(trailGeometry, trailMaterial);
      trail.position.copy(position);

      scene.add(trail);

      // Fade out and remove after animation
      const startTime = Date.now();
      const animateTrail = () => {
        const elapsed = Date.now() - startTime;
        const duration = 500; // ms

        if (elapsed < duration) {
          const progress = elapsed / duration;
          trail.material.opacity = 0.7 * (1 - progress);
          trail.scale.setScalar(1 + progress);
          requestAnimationFrame(animateTrail);
        } else {
          scene.remove(trail);
          trail.geometry.dispose();
          trail.material.dispose();
        }
      };

      animateTrail();
    }

    // Helper function to create processing effect
    function createProcessingEffect(scene, position) {
      const ringGeometry = new THREE.RingGeometry(0.1, 0.15, 16);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x10b981,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(position);

      // Random orientation
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;

      scene.add(ring);

      // Expand and fade animation
      const startTime = Date.now();
      const animateRing = () => {
        const elapsed = Date.now() - startTime;
        const duration = 800; // ms

        if (elapsed < duration) {
          const progress = elapsed / duration;
          ring.scale.setScalar(1 + progress * 3);
          ring.material.opacity = 0.8 * (1 - progress);
          requestAnimationFrame(animateRing);
        } else {
          scene.remove(ring);
          ring.geometry.dispose();
          ring.material.dispose();
        }
      };

      animateRing();
    }

    animate();

    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Helper functions for blockchain visualization
  function getLayerColor(layer) {
    const colors = [
      0x3b82f6, // Blue
      0x8b5cf6, // Purple
      0xf59e0b, // Orange
      0x10b981, // Green
    ];
    return colors[layer % colors.length];
  }

  function getBlockColor(layer, blockIndex) {
    const baseColor = new THREE.Color(getLayerColor(layer));
    const darkenFactor = 1 - blockIndex * 0.1;

    return new THREE.Color(
      baseColor.r * darkenFactor,
      baseColor.g * darkenFactor,
      baseColor.b * darkenFactor
    ).getHex();
  }

  function getDataBlockColor(type) {
    const colors = [
      0x3b82f6, // Transfer (Blue)
      0x8b5cf6, // Swap (Purple)
      0x10b981, // Mint (Green)
      0xfbbf24, // Stake (Yellow)
    ];
    return colors[type % colors.length];
  }

  const techStack = [
    "Solidity",
    "Ether.js",
    "Rust",
    "DeFi",
    "Smart Contracts",
    "React",
  ];

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-600 dark:text-primary-400 font-medium"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white"
            >
              Arijit Roy
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl font-light text-gray-600 dark:text-gray-300"
            >
              DeFi Engineer & Blockchain Developer
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-lg"
          >
            I architect decentralized financial protocols and smart contracts
            that power the future of finance. Building the infrastructure that
            connects global blockchain networks and enables trustless financial
            innovation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1BF6f59XlhTT8AaQCnpnGLjdWmsLyKuwW/view?usp=drivesdk"
                );
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <Download size={20} />
              Download CV
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4"
          >
            {[
              { icon: Github, href: "https://github.com/arijitroy667/" },
              {
                icon: Linkedin,
                href: "www.linkedin.com/in/arijit-roy-148109314",
              },
              {
                icon: Twitter,
                href: "https://x.com/ARIJITROY115058/status/1895836210834391091",
              },
              { icon: Mail, href: "mailto:arijitroy0445@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                className="p-3 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              ref={mountRef}
              className="w-[450px] h-[450px] flex items-center justify-center"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-primary-400/10 via-secondary-400/10 to-accent-400/10 rounded-full blur-2xl"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                Live Blockchain Network
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ y: -5 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-primary-600 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
