import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { transition1 } from "../utils/transitions";
import { usePlayDateIconInfo } from "../utils/store";

function Box({}) {
  const location = usePlayDateIconInfo((state) => state.location);
  const setLocation = usePlayDateIconInfo((state) => state.setLocation);
  const size = usePlayDateIconInfo((state) => state.size);
  const setSize = usePlayDateIconInfo((state) => state.setSize);

  // This reference will give us direct access to the mesh
  const meshRef = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  //   useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  //   const variants = {
  //     hidden: { x: 1 },
  //     visible: { opacity: 1 },
  //   };

  return (
    // Change position in mesh, size in boxGeometry
    <motion.mesh
      ref={meshRef}
      position={location}
      onClick={() =>
        location ? setLocation([0, -2, 1]) : setLocation([0, 0, 0])
      }
      transition={{ ...transition1 }}
    >
      {/* Need to use movement to change size, not actual args */}
      <motion.boxGeometry args={size} />
      <motion.meshStandardMaterial
        color={"blue"}
        // initial="hidden"
        // initial={[0, 0, 0]}
        // animate={[1, 1, 1]}
        // transition={transition1}
        // variants={variants}
      />
    </motion.mesh>
  );
}

export default Box;
