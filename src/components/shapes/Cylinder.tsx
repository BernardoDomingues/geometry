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
    <mesh>
      <cylinderGeometry args={[1, 1, 2, 32]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />
      <group>
        {/* Top circle */}
        <mesh position={[0, 1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.99, 1.01, 32]} />
          <lineBasicMaterial color="white" side={THREE.DoubleSide} />
        </mesh>
        {/* Bottom circle */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.99, 1.01, 32]} />
          <lineBasicMaterial color="white" side={THREE.DoubleSide} />
        </mesh>
      </group>
    </mesh>
  );
}
