"use client";

import * as THREE from "three";

export default function Icosahedron({
  showEdges,
  showFaces,
  showVertices,
}: {
  showEdges: boolean;
  showFaces: boolean;
  showVertices: boolean;
}) {
  const geometry = new THREE.IcosahedronGeometry(1.5);
  const positions = geometry.attributes.position.array;

  return (
    <mesh>
      <icosahedronGeometry args={[1.5]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />
      {showEdges ? (
        <lineSegments>
          <edgesGeometry args={[geometry]} />
          <lineBasicMaterial color="red" />
        </lineSegments>
      ) : (
        <lineSegments>
          <edgesGeometry args={[geometry]} />
          <lineBasicMaterial color="white" />
        </lineSegments>
      )}
      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[positions, 3]}
              attach="attributes-position"
              count={12}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="green" size={0.15} />
        </points>
      )}
    </mesh>
  );
}
