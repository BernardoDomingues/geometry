"use client";

import * as THREE from "three";

export default function Pyramid({
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
      <coneGeometry args={[1.5, 2, 4]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />
      {showEdges ? (
        <lineSegments>
          <edgesGeometry args={[new THREE.ConeGeometry(1.5, 2, 4)]} />
          <lineBasicMaterial color="red" />
        </lineSegments>
      ) : (
        <lineSegments>
          <edgesGeometry args={[new THREE.ConeGeometry(1.5, 2, 4)]} />
          <lineBasicMaterial color="white" />
        </lineSegments>
      )}
      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[
                new Float32Array([
                  0, 1, 0, 1.5, -1, 0, 0, -1, 1.5, -1.5, -1, 0, 0, -1, -1.5,
                ]),
                3,
              ]}
              attach="attributes-position"
              count={5}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="green" size={0.2} />
        </points>
      )}
    </mesh>
  );
}
