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
      {showEdges ? (
        <lineSegments>
          <edgesGeometry args={[new THREE.CylinderGeometry(1, 1, 2, 32)]} />
          <lineBasicMaterial color="red" />
        </lineSegments>
      ) : (
        <lineSegments>
          <edgesGeometry args={[new THREE.CylinderGeometry(1, 1, 2, 32)]} />
          <lineBasicMaterial color="white" />
        </lineSegments>
      )}
      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[
                new Float32Array([
                  0, -1, 0,    // bottom center
                  0, 1, 0,     // top center
                  1, -1, 0,    // bottom right
                  1, 1, 0,     // top right
                  -1, -1, 0,   // bottom left
                  -1, 1, 0,    // top left
                  0, -1, 1,    // bottom front
                  0, 1, 1,     // top front
                  0, -1, -1,   // bottom back
                  0, 1, -1,    // top back
                ]),
                3,
              ]}
              attach="attributes-position"
              count={10}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="green" size={0.2} />
        </points>
      )}
    </mesh>
  );
} 