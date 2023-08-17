import { Canvas } from "@react-three/fiber";
import { MotionCanvas } from "framer-motion-3d";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Box from "../components/Box";
import { motion } from "framer-motion-3d";
import TextTest from "./TextTest";
import { transition1 } from "../utils/transitions";
import { usePlayDateIconLocation } from "../utils/store";

export default function Scene() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <TextTest
        textContent="Welcome to my site"
        position={[-1.5, 3.5, 0]}
        scale={0.15}
      />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  );
}
