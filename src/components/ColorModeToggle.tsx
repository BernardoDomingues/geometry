import { useColorModeValue } from "./ui/color-mode";

import { Box, IconButton } from "@chakra-ui/react";
import { CiDark, CiLight } from "react-icons/ci";
import { useColorMode } from "./ui/color-mode";

export default function ColorModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="fixed" top={4} right={4} zIndex={1000}>
      <IconButton
        aria-label="Alternar modo de cor"
        onClick={toggleColorMode}
        variant="ghost"
        colorScheme={useColorModeValue("blue", "whiteAlpha")}
        size="lg"
        borderRadius="full"
        _hover={{
          bg: useColorModeValue("gray.100", "whiteAlpha.200"),
        }}
      >
        {colorMode === "light" ? <CiDark /> : <CiLight />}
      </IconButton>
    </Box>
  );
}
