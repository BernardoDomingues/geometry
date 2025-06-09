"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  VStack,
  Switch,
} from "@chakra-ui/react";
import { useState, use } from "react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Footer from "@/components/Footer";
import { shapes } from "@/helpers/shapes";

export default function FormaPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  const [showEdges, setShowEdges] = useState(false);
  const [showFaces, setShowFaces] = useState(false);
  const [showVertices, setShowVertices] = useState(false);

  const shape = shapes.find((s) => s.id === resolvedParams.id);

  if (!shape) {
    return (
      <Box bg={bgColor} minH="100vh" p={8}>
        <Container maxW="container.xl">
          <Heading>Forma não encontrada</Heading>
          <Text mt={4}>A forma que você está procurando não existe.</Text>
        </Container>
      </Box>
    );
  }

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Header */}
      <Box
        bg={useColorModeValue("white", "gray.900")}
        bgGradient={useColorModeValue(
          "linear(to-r, blue.400, purple.400)",
          "linear(to-r, blue.500, purple.500)"
        )}
        color={useColorModeValue("gray.800", "white")}
        py={8}
      >
        <Container maxW="container.xl">
          <Heading
            as="h1"
            size="xl"
            textAlign="center"
            textShadow={useColorModeValue(
              "none",
              "2px 2px 4px rgba(0,0,0,0.2)"
            )}
          >
            {shape.name}
          </Heading>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={12}>
        <Flex gap={8} direction={{ base: "column", lg: "row" }}>
          {/* 3D View */}
          <Box
            flex="1"
            h="500px"
            bg={cardBg}
            borderRadius="lg"
            overflow="hidden"
          >
            <Canvas camera={{ position: [3, 3, 3] }} style={{ height: "500px" }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <shape.component
                showEdges={showEdges}
                showFaces={showFaces}
                showVertices={showVertices}
              />
              <OrbitControls />
            </Canvas>
          </Box>

          {/* Controls */}
          <Box w={{ base: "100%", lg: "300px" }}>
            <VStack gap={6} align="stretch">
              <Flex alignItems="center">
                <Text mb="0" mr={2}>Mostrar Faces</Text>
                <Switch.Root
                  checked={showFaces}
                  onCheckedChange={(e) => setShowFaces(e.checked)}
                >
                  <Switch.HiddenInput />
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                  <Switch.Label />
                </Switch.Root>
              </Flex>
              <Flex alignItems="center">
                <Text mb="0" mr={2}>Mostrar Arestas</Text>
                <Switch.Root
                  checked={showEdges}
                  onCheckedChange={(e) => setShowEdges(e.checked)}
                >
                  <Switch.HiddenInput />
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                  <Switch.Label />
                </Switch.Root>
              </Flex>
              <Flex alignItems="center">
                <Text mb="0" mr={2}>Mostrar Vértices</Text>
                <Switch.Root
                  checked={showVertices}
                  onCheckedChange={(e) => setShowVertices(e.checked)}
                >
                  <Switch.HiddenInput />
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                  <Switch.Label />
                </Switch.Root>
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
}
