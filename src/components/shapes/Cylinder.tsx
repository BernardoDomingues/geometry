"use client";

import * as THREE from "three";

export default function Cylinder({
  showEdges,
  showFaces,
  showVertices,
}: {
  showEdges: boolean;
  showFaces: boolean;
  showVertices: boolean;
}) {
  return (
    <group>
      <directionalLight position={[3, 5, 2]} intensity={1} />
      <ambientLight intensity={0.3} />

      <mesh>
        <cylinderGeometry args={[1, 1, 2, 32]} />
        <meshStandardMaterial
          color="#1e88e5"
          transparent
          opacity={showFaces ? 1 : 0.3}
        />
      </mesh>
    </group>
  );
}
