"use client";

import * as THREE from "three";

export default function RectangularPrism({
  showEdges,
  showFaces,
  showVertices,
}: {
  showEdges: boolean;
  showFaces: boolean;
  showVertices: boolean;
}) {
  const width = 3;
  const height = 2;
  const depth = 4;

  return (
    <mesh>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />
      {showEdges ? (
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(width, height, depth)]} />
          <lineBasicMaterial color="red" />
        </lineSegments>
      ) : (
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(width, height, depth)]} />
          <lineBasicMaterial color="white" />
        </lineSegments>
      )}
      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[
                new Float32Array([
                  -width / 2,
                  -height / 2,
                  -depth / 2,
                  width / 2,
                  -height / 2,
                  -depth / 2,
                  width / 2,
                  height / 2,
                  -depth / 2,
                  -width / 2,
                  height / 2,
                  -depth / 2,
                  -width / 2,
                  -height / 2,
                  depth / 2,
                  width / 2,
                  -height / 2,
                  depth / 2,
                  width / 2,
                  height / 2,
                  depth / 2,
                  -width / 2,
                  height / 2,
                  depth / 2,
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
