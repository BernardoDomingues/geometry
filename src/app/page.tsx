"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaCube, FaShapes, FaGraduationCap } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const primaryColor = "blue.500";
  const headingColor = useColorModeValue("gray.800", "white");
  const heroBg = useColorModeValue("white", "gray.900");
  const heroGradient = useColorModeValue(
    "linear(to-r, blue.400, purple.400)",
    "linear(to-r, blue.500, purple.500)"
  );

  const features = [
    {
      icon: FaCube,
      title: "Visualização 3D",
      description: "Explore formas geométricas em um ambiente tridimensional interativo",
    },
    {
      icon: FaShapes,
      title: "Formas Interativas",
      description: "Gire, mova e interaja com diferentes formas geométricas",
    },
    {
      icon: FaGraduationCap,
      title: "Aprendizado Prático",
      description: "Aprenda geometria de forma divertida e interativa",
    },
  ];

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Hero Section */}
      <Box
        bg={heroBg}
        bgGradient={heroGradient}
        color={headingColor}
        py={20}
      >
        <Container maxW="container.xl">
          <VStack gap={8} align="center" textAlign="center">
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              color={headingColor}
              textShadow={useColorModeValue("none", "2px 2px 4px rgba(0,0,0,0.2)")}
            >
              Geometria Interativa
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              Explore o mundo da geometria de forma divertida e interativa.
              Aprenda sobre formas, ângulos e medidas através de uma experiência
              visual única.
            </Text>
            <Button
              size="lg"
              colorScheme={useColorModeValue("blue", "whiteAlpha")}
              _hover={{ bg: useColorModeValue("blue.600", "blue.600") }}
              onClick={() => router.push("/formas")}
            >
              Começar a Explorar
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          {features.map((feature, index) => (
            <Box
              key={index}
              p={8}
              bg={useColorModeValue("white", "gray.800")}
              borderRadius="lg"
              boxShadow="xl"
              _hover={{ transform: "translateY(-5px)", transition: "all 0.3s" }}
            >
              <VStack gap={4} align="center">
                <Icon
                  as={feature.icon}
                  w={12}
                  h={12}
                  color={primaryColor}
                />
                <Heading size="md">{feature.title}</Heading>
                <Text textAlign="center" color={useColorModeValue("gray.600", "gray.300")}>
                  {feature.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
