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
        <Text>Copyright &copy; 2023 Hang Pham. All rights reserved.</Text>
        <Text>Last Updated: July 2023</Text>
      </Container>
    </Box>
  );
};

export default Footer;
