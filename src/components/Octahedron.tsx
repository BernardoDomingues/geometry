"use client";

import * as THREE from "three";

export default function Octahedron({
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
      <octahedronGeometry args={[1.5]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />
      {showEdges ? (
        <lineSegments>
          <edgesGeometry args={[new THREE.OctahedronGeometry(1.5)]} />
          <lineBasicMaterial color="red" />
        </lineSegments>
      ) : (
        <lineSegments>
          <edgesGeometry args={[new THREE.OctahedronGeometry(1.5)]} />
          <lineBasicMaterial color="white" />
        </lineSegments>
      )}
      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[
                new Float32Array([
                  1.5, 0, 0, -1.5, 0, 0, 0, 1.5, 0, 0, -1.5, 0, 0, 0, 1.5, 0, 0, -1.5
                ]),
                3,
              ]}
              attach="attributes-position"
              count={6}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="green" size={0.2} />
        </points>
      )}
    </mesh>
  );
} 