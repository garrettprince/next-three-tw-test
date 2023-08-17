import React from "react";
import { Text } from "@react-three/drei";
import { motion } from "framer-motion-3d";

function TextTest({ textContent, position, scale }) {
  return (
    <Text anchorX={0} color={"black"} position={position} scale={scale} font>
      {textContent}
    </Text>
  );
}

export default TextTest;
