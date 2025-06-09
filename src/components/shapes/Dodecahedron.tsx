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
              args={[
                new Float32Array([
                  // Dodecahedron vertices
                  0.607, 0, 0.795, 0.188, 0.577, 0.795, -0.491, 0.357, 0.795,
                  -0.491, -0.357, 0.795, 0.188, -0.577, 0.795, 0.982, 0, 0.188,
                  0.304, 0.934, 0.188, -0.795, 0.577, 0.188, -0.795, -0.577, 0.188,
                  0.304, -0.934, 0.188, 0.795, 0.577, -0.188, -0.304, 0.934, -0.188,
                  -0.982, 0, -0.188, -0.304, -0.934, -0.188, 0.795, -0.577, -0.188,
                  0.491, 0.357, -0.795, -0.188, 0.577, -0.795, -0.607, 0, -0.795,
                  -0.188, -0.577, -0.795, 0.491, -0.357, -0.795
                ]),
                3,
              ]}
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