"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "@/components/Cube";
import RectangularPrism from "@/components/RectangularPrism";
import Pyramid from "@/components/Pyramid";
import Cylinder from "@/components/Cylinder";
import Cone from "@/components/Cone";
import Sphere from "@/components/Sphere";
import Tetrahedron from "@/components/Tetrahedron";
import Dodecahedron from "@/components/Dodecahedron";
import Octahedron from "@/components/Octahedron";
import Icosahedron from "@/components/Icosahedron";

export default function Home() {
  const [showEdges, setShowEdges] = useState(false);
  const [showFaces, setShowFaces] = useState(false);
  const [showVertices, setShowVertices] = useState(false);

  return (
    <div className="h-screen w-full">
      <div className="h-[90vh] w-full">
        <Canvas camera={{ position: [3, 3, 3] }} style={{ height: "500px" }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Icosahedron
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
