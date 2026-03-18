import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "../style/ThreeHero.css";

/* ── Outer orbit ring ── */
function OuterRing({ mouse }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.12;
    ref.current.rotation.x = 0.55 + mouse.current.y * 0.00008;
    ref.current.rotation.z = mouse.current.x * 0.00006;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.4, 0.008, 6, 120]} />
      <meshBasicMaterial color="#C49A7A" opacity={0.5} transparent />
    </mesh>
  );
}

/* ── Mid orbit ring (opposite direction, different tilt) ── */
function MidRing({ mouse }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = -clock.elapsedTime * 0.08;
    ref.current.rotation.x = 1.1 + mouse.current.y * 0.00006;
    ref.current.rotation.z = 0.4 - mouse.current.x * 0.00005;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.75, 0.006, 6, 100]} />
      <meshBasicMaterial color="#D4A574" opacity={0.38} transparent />
    </mesh>
  );
}

/* ── Inner ring (fastest but still slow, vertical tilt) ── */
function InnerRing({ mouse }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.z = clock.elapsedTime * 0.18;
    ref.current.rotation.x = 0.2 + mouse.current.y * 0.00005;
    ref.current.rotation.y = mouse.current.x * 0.00004;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[1.15, 0.005, 6, 80]} />
      <meshBasicMaterial color="#B4846C" opacity={0.3} transparent />
    </mesh>
  );
}

/* ── Floating dot particles on the outer ring ── */
function OrbitDot({ angle, radius, speed, mouse }) {
  const ref = useRef();
  const baseAngle = useRef(angle);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * speed + baseAngle.current;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.y = Math.sin(t) * radius * 0.35;
    ref.current.position.z = Math.sin(t) * radius * 0.6;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.045, 8, 8]} />
      <meshBasicMaterial color="#B4846C" opacity={0.7} transparent />
    </mesh>
  );
}

const ThreeScene = ({ mouse }) => (
  <>
    <OuterRing mouse={mouse} />
    <MidRing mouse={mouse} />
    <InnerRing mouse={mouse} />
    {/* 4 dots orbiting on outer path */}
    <OrbitDot angle={0}              radius={2.4} speed={0.14} mouse={mouse} />
    <OrbitDot angle={Math.PI / 2}   radius={2.4} speed={0.14} mouse={mouse} />
    <OrbitDot angle={Math.PI}       radius={2.4} speed={0.14} mouse={mouse} />
    <OrbitDot angle={Math.PI * 1.5} radius={2.4} speed={0.14} mouse={mouse} />
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
