import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={4} align="center">
        <Text>Copyright &copy; 2024 Hang Pham. All rights reserved.</Text>
        <Text>Last Updated: January 2024</Text>
      </Container>
    </Box>
  );
};

export default Footer;
