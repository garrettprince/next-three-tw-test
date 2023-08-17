import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the active state
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.mesh
      {...props}
      ref={meshRef}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      //   scale={active ? 1.5 : 1}
      //   onClick={(event) => setActive(!active)}
    >
      <motion.boxGeometry args={[1, 1, 1]} />
      <motion.meshStandardMaterial
        color={"blue"}
        initial="hidden"
        animate="visible"
        variants={variants}
      />
    </motion.mesh>
  );
}

export default Box;
