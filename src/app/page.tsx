'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Cube({ showEdges, showFaces, showVertices }: { 
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
        opacity={showFaces ? 0.3 : 1}
      />
      {showEdges && (
        <lineSegments>
          <edgesGeometry args={[new THREE.BoxGeometry(2, 2, 2)]} />
          <lineBasicMaterial color="red" />
        </lineSegments>
      )}
      {showVertices && (
        <points>
          <bufferGeometry>
            <bufferAttribute
              args={[new Float32Array([
                -1, -1, -1,  1, -1, -1,  1, 1, -1, -1, 1, -1,
                -1, -1, 1,   1, -1, 1,   1, 1, 1,  -1, 1, 1
              ]), 3]}
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

export default function Home() {
  const [showEdges, setShowEdges] = useState(false);
  const [showFaces, setShowFaces] = useState(false);
  const [showVertices, setShowVertices] = useState(false);

  return (
    <div className="h-screen w-full">
      <div className="h-[90vh] w-full">
        <Canvas camera={{ position: [3, 3, 3] }} style={{ height: '500px' }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Cube 
            showEdges={showEdges}
            showFaces={showFaces}
            showVertices={showVertices}
          />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="flex justify-center gap-4 p-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showEdges}
            onChange={(e) => setShowEdges(e.target.checked)}
          />
          Arestas
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showFaces}
            onChange={(e) => setShowFaces(e.target.checked)}
          />
          Lados
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showVertices}
            onChange={(e) => setShowVertices(e.target.checked)}
          />
          Vértices
        </label>
      </div>
    </div>
  );
}
