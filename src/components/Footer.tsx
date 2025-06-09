import { Box, Flex, Container, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

export default function Footer() {
  const primaryColor = useColorModeValue("blue.500", "blue.400");

  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.100", "gray.900")}
      py={6}
      mt="auto"
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
        >
          <Text>
            © {new Date().getFullYear()} DOM Soluções Tecnológicas. Todos os
            direitos reservados.
          </Text>
          <Text>
            <a
              href="https://www.domdev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: primaryColor }}
            >
              www.domdev.com.br
            </a>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
