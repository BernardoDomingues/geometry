"use client";

import * as THREE from "three";

export default function Cone({
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
      <coneGeometry args={[1, 2, 32]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />
      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[new Float32Array([0, 1, 0]), 3]}
              attach="attributes-position"
              count={1}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="green" size={0.2} />
        </points>
      )}
      <group>
        {/* Bottom circle */}
        <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.99, 1.01, 32]} />
          <lineBasicMaterial color="white" side={THREE.DoubleSide} />
        </mesh>
      </group>
    </mesh>
  );
}
