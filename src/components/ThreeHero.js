import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../style/ThreeHero.css";

function WireframeIco({ mouse }) {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.003;
    meshRef.current.rotation.y += 0.004;
    // subtle mouse influence
    meshRef.current.rotation.y += mouse.current.x * 0.00018;
    meshRef.current.rotation.x += mouse.current.y * 0.00012;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial color="#C49A7A" wireframe />
    </mesh>
  );
}

function FloatingRing({ mouse }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.4;
    meshRef.current.rotation.z += 0.006;
    meshRef.current.position.x = mouse.current.x * 0.0008;
    meshRef.current.position.y = -mouse.current.y * 0.0008;
  });

  return (
    <mesh ref={meshRef} position={[2.8, 0.8, -1]}>
      <torusGeometry args={[0.7, 0.012, 8, 48]} />
      <meshBasicMaterial color="#D4A574" wireframe={false} opacity={0.45} transparent />
    </mesh>
  );
}

function SmallOcta({ mouse }) {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.007;
    meshRef.current.rotation.z += 0.005;
    meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.3 - 1.2;
    meshRef.current.position.x = -2.4 + mouse.current.x * 0.0005;
  });

  return (
    <mesh ref={meshRef}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshBasicMaterial color="#B4846C" wireframe />
    </mesh>
  );
}

const ThreeScene = ({ mouse }) => (
  <>
    <WireframeIco mouse={mouse} />
    <FloatingRing mouse={mouse} />
    <SmallOcta mouse={mouse} />
  </>
);

const ThreeHero = () => {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="three-hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ThreeScene mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeHero;
