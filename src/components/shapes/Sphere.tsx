"use client";

export default function Sphere({
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
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#1e88e5"
        transparent
        opacity={showFaces ? 1 : 0.3}
      />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ambientLight intensity={0.3} />
    </mesh>
  );
}
