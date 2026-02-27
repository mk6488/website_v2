import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

type EnergyLineProps = {
  index: number;
  radius: number;
  color: string;
  speed: number;
  opacity: number;
  segmentCount: number;
};

function EnergyLine({ index, radius, color, speed, opacity, segmentCount }: EnergyLineProps) {
  const groupRef = useRef<THREE.Group>(null);
  const offset = index * 0.7;
  const points = useMemo(() => {
    const generated: THREE.Vector3[] = [];
    for (let i = 0; i <= segmentCount; i += 1) {
      const t = (i / segmentCount) * Math.PI * 2;
      const x = Math.cos(t + offset) * radius;
      const y = Math.sin(t * 1.7 + offset * 2) * 0.4;
      const z = Math.sin(t + offset) * radius * 0.55;
      generated.push(new THREE.Vector3(x, y, z));
    }
    return generated;
  }, [offset, radius, segmentCount]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.y = t * speed;
    groupRef.current.rotation.x = Math.sin(t * 0.25 + offset) * 0.12;
  });

  return (
    <group ref={groupRef}>
      <Line points={points} color={color} lineWidth={1.2} transparent opacity={opacity} />
    </group>
  );
}

function SceneContent({ lineCount }: { lineCount: number }) {
  const palette = ["#f97316", "#fb923c", "#fdba74", "#f59e0b"];

  return (
    <>
      <color attach="background" args={["#090909"]} />
      <ambientLight intensity={0.65} />
      <pointLight position={[4, 5, 6]} intensity={2.2} color="#f97316" />
      <pointLight position={[-5, -2, -6]} intensity={1.4} color="#fb923c" />
      {Array.from({ length: lineCount }).map((_, index) => (
        <EnergyLine
          key={index}
          index={index}
          radius={1.25 + index * 0.17}
          color={palette[index % palette.length]}
          speed={0.12 + index * 0.02}
          opacity={0.2 + (index % 4) * 0.12}
          segmentCount={lineCount <= 8 ? 40 : 64}
        />
      ))}
    </>
  );
}

function EnergyLinesHero() {
  const [isMobile, setIsMobile] = useState(false);
  const [weakDevice, setWeakDevice] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobile = () => setIsMobile(mediaQuery.matches);
    updateMobile();
    mediaQuery.addEventListener("change", updateMobile);
    return () => mediaQuery.removeEventListener("change", updateMobile);
  }, []);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const cores = navigator.hardwareConcurrency ?? 8;
    setWeakDevice(cores <= 4);
  }, []);

  const maxDpr = isMobile && weakDevice ? 1.1 : isMobile || weakDevice ? 1.25 : 1.75;
  const lineCount = isMobile && weakDevice ? 5 : isMobile ? 7 : weakDevice ? 8 : 12;

  return (
    <Canvas camera={{ position: [0, 0.5, 4.5], fov: 55 }} dpr={[1, maxDpr]}>
      <SceneContent lineCount={lineCount} />
    </Canvas>
  );
}

export default EnergyLinesHero;
