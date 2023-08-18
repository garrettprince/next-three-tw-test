import { Canvas } from "@react-three/fiber";
import { useState, Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Box from "../components/Box";
import { motion } from "framer-motion-3d";
import TextTest from "./TextTest";
import { transition1 } from "../utils/transitions";
import { usePlayDateIconLocation } from "../utils/store";

export default function Scene() {
  const [active, setActive] = useState(false);

  return (
    <Canvas
    // camera={{ position: [0, 0, 0], fov: 0 }}
    >
      {/* <OrbitControls /> */}

      {/* Lighting */}
      <ambientLight intensity={1.5} />
      <pointLight intensity={1.4} position={[0, 6, 0]} />

      {/* Text */}
      <TextTest
        textContent="Welcome to my site"
        position={[-1.5, 3.5, 0]}
        scale={0.15}
      />

      <Box active={active} setActive={setActive} />
    </Canvas>
  );
}
