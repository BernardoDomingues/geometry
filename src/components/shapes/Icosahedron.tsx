"use client";

import * as THREE from "three";
import { useMemo } from "react";

export default function Icosahedron({
  showEdges,
  showFaces,
  showVertices,
}: {
  showEdges: boolean;
  showFaces: boolean;
  showVertices: boolean;
}) {
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.5), []);

  const uniqueVertices = useMemo(() => {
    const pos = geometry.getAttribute("position");
    const verticesSet = new Set<string>();
    const unique: number[] = [];

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);
      const key = `${x.toFixed(5)},${y.toFixed(5)},${z.toFixed(5)}`;
      if (!verticesSet.has(key)) {
        verticesSet.add(key);
        unique.push(x, y, z);
      }
    }

    return new Float32Array(unique);
  }, [geometry]);

  return (
    <mesh>
      <icosahedronGeometry args={[1.5]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />

      <lineSegments>
        <edgesGeometry args={[geometry]} />
        <lineBasicMaterial color={showEdges ? "red" : "white"} />
      </lineSegments>

      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[uniqueVertices, 3]}
            />
          </bufferGeometry>
          <pointsMaterial color="green" size={0.15} />
        </points>
      )}
    </mesh>
  );
}
