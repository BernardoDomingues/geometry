import { FaCube } from "react-icons/fa";
import { TbBrandPrisma, TbOctahedron, TbSphere } from "react-icons/tb";
import { LuCone, LuCylinder, LuPyramid } from "react-icons/lu";
import Cube from "@/components/shapes/Cube";
import Cone from "@/components/shapes/Cone";
import Cylinder from "@/components/shapes/Cylinder";
import Dodecahedron from "@/components/shapes/Dodecahedron";
import Icosahedron from "@/components/shapes/Icosahedron";
import Octahedron from "@/components/shapes/Octahedron";
import Pyramid from "@/components/shapes/Pyramid";
import RectangularPrism from "@/components/shapes/RectangularPrism";
import Sphere from "@/components/shapes/Sphere";
import Tetrahedron from "@/components/shapes/Tetrahedron";
import {
  DomDodecahedron,
  DomIcosahedron,
  DomRectangularPrism,
} from "@/components/DomIcons";

export interface IShape {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType | null;
  component: React.ComponentType<{
    showEdges: boolean;
    showFaces: boolean;
    showVertices: boolean;
  }>;
  config: {
    hasEdges: boolean;
    hasFaces: boolean;
    hasVertices: boolean;
  };
}

export const shapes: IShape[] = [
  {
    id: "cone",
    name: "Cone",
    description: "Explore as faces e vértices do cone",
    icon: LuCone,
    component: Cone,
    config: {
      hasEdges: false,
      hasFaces: true,
      hasVertices: true,
    },
  },
  {
    id: "cubo",
    name: "Cubo",
    description: "Explore as faces, arestas e vértices do cubo",
    icon: FaCube,
    component: Cube,
    config: {
      hasEdges: true,
      hasFaces: true,
      hasVertices: true,
    },
  },
  {
    id: "cilindro",
    name: "Cilindro",
    description: "Explore as faces do cilindro",
    icon: LuCylinder,
    component: Cylinder,
    config: {
      hasEdges: false,
      hasFaces: true,
      hasVertices: false,
    },
  },
  {
    id: "dodecaedro",
    name: "Dodecaedro",
    description: "Explore as faces, arestas e vértices do dodecaedro",
    icon: DomDodecahedron,
    component: Dodecahedron,
    config: {
      hasEdges: true,
      hasFaces: true,
      hasVertices: true,
    },
  },
  {
    id: "icosaedro",
    name: "Icosaedro",
    description: "Explore as faces, arestas e vértices do icosaedro",
    icon: DomIcosahedron,
    component: Icosahedron,
    config: {
      hasEdges: true,
      hasFaces: true,
      hasVertices: true,
    },
  },
  {
    id: "octaedro",
    name: "Octaedro",
    description: "Explore as faces, arestas e vértices do octaedro",
    icon: TbOctahedron,
    component: Octahedron,
    config: {
      hasEdges: true,
      hasFaces: true,
      hasVertices: true,
    },
  },
  {
    id: "piramide",
    name: "Pirâmide",
    description: "Explore as faces, arestas e vértices da pirâmide",
    icon: LuPyramid,
    component: Pyramid,
    config: {
      hasEdges: true,
      hasFaces: true,
      hasVertices: true,
    },
  },
  {
    id: "prisma-retangular",
    name: "Prisma Retangular",
    description: "Explore as faces, arestas e vértices do prisma retangular",
    icon: DomRectangularPrism,
    component: RectangularPrism,
    config: {
      hasEdges: true,
      hasFaces: true,
      hasVertices: true,
    },
  },
  {
    id: "esfera",
    name: "Esfera",
    description: "Explore as faces da esfera",
    icon: TbSphere,
    component: Sphere,
    config: {
      hasEdges: false,
      hasFaces: true,
      hasVertices: false,
    },
  },
  {
    id: "tetraedro",
    name: "Tetraedro",
    description: "Explore as faces, arestas e vértices do tetraedro",
    icon: TbBrandPrisma,
    component: Tetrahedron,
    config: {
      hasEdges: true,
      hasFaces: true,
      hasVertices: true,
    },
  },
];
