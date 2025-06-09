"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useColorModeValue } from "@/components/ui/color-mode";
import Footer from "@/components/Footer";
import { shapes } from "@/helpers/shapes";
import { FaRegEyeSlash } from "react-icons/fa";

export default function Formas() {
  const router = useRouter();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const primaryColor = "blue.500";
  const cardBg = useColorModeValue("white", "gray.800");

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
            textShadow={useColorModeValue("none", "2px 2px 4px rgba(0,0,0,0.2)")}
          >
            Formas Geométricas
          </Heading>
        </Container>
      </Box>

      {/* Shapes Grid */}
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {shapes.map((shape) => (
            <Box
              key={shape.id}
              bg={cardBg}
              p={6}
              borderRadius="lg"
              boxShadow="xl"
              cursor="pointer"
              onClick={() => router.push(`/formas/${shape.id}`)}
              _hover={{
                transform: "translateY(-5px)",
                transition: "all 0.3s",
                boxShadow: "2xl",
              }}
            >
              <Flex direction="column" align="center" gap={4}>
                <Icon
                  as={shape.icon ?? FaRegEyeSlash}
                  w={16}
                  h={16}
                  color={primaryColor}
                />
                <Heading size="md">{shape.name}</Heading>
                <Text textAlign="center" color={useColorModeValue("gray.600", "gray.300")}>
                  {shape.description}
                </Text>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
      <Footer />
    </Box>
  );
} 