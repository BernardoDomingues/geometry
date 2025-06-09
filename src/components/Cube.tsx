"use client";

import * as THREE from "three";

export default function Cube({
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
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />
      {showEdges ? (
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
          <lineBasicMaterial color="red" />
        </lineSegments>
      ) : (
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
          <lineBasicMaterial color="white" />
        </lineSegments>
      )}
      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[
                new Float32Array([
                  -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1,
                  1, 1, 1, 1, -1, 1, 1,
                ]),
                3,
              ]}
              attach="attributes-position"
              count={8}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial color="green" size={0.2} />
        </points>
      )}
    </mesh>
  );
}
