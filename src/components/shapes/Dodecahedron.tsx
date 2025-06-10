"use client";

import * as THREE from "three";

export default function Dodecahedron({
  showEdges,
  showFaces,
  showVertices,
}: {
  showEdges: boolean;
  showFaces: boolean;
  showVertices: boolean;
}) {
  const geometry = new THREE.DodecahedronGeometry(1.5);
  const positions = geometry.attributes.position.array;

  return (
    <mesh>
      <dodecahedronGeometry args={[1.5]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />
      {showEdges ? (
        <lineSegments>
          <edgesGeometry args={[new THREE.DodecahedronGeometry(1.5)]} />
          <lineBasicMaterial color="red" />
        </lineSegments>
      ) : (
        <lineSegments>
          <edgesGeometry args={[new THREE.DodecahedronGeometry(1.5)]} />
          <lineBasicMaterial color="white" />
        </lineSegments>
      )}
      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[new Float32Array(positions), 3]}
              attach="attributes-position"
              count={20}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="green" size={0.2} />
        </points>
      )}
    </mesh>
  );
}
