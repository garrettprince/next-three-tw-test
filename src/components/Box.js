import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";

function Box({ active, setActive }) {
  // React Spring objects
  const { scale, color1, position } = useSpring({
    color1: active ? "blue" : "red",
    scale: active ? 1 : 0.9,
    position: active ? [0, 0, 0] : [1, 1, 1],
  });

  // This reference will give us direct access to the mesh
  const meshRef = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));

  return (
    // Change position in mesh, size in boxGeometry
    <animated.mesh
      scale={scale}
      onClick={() => setActive(!active)}
      ref={meshRef}
      position={position}
    >
      <animated.boxGeometry />
      <animated.meshStandardMaterial color={color1} />
    </animated.mesh>
  );
}

export default Box;
