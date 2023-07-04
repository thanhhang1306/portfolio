import React from "react";
import { Fade } from "react-reveal";
import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface ContactProps {
  color: string;
}

const Contact: React.FC<ContactProps> = ({ color }) => {
  const linkedin = () => {
    window.open(`https://www.linkedin.com/in/hang-pham-727774188/`, "_blank", "noreferrer,noopener");
  };

  const github = () => {
    window.open(`https://github.com/thanhhang1306`, "_blank", "noreferrer,noopener");
  };

  const email = () => {
    window.open(`mailto:hang.pham@princeton.edu`, "_blank", "noreferrer,noopener");
  };

  return (
    <>
      <Container maxW={"3xl"} id="contact">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                05
              </Text>
              <Text fontWeight={800}>Contact</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Fade>
            <Heading fontSize={"3xl"}>Let's stay in touch!</Heading>
            <Text color={"white.600"} fontSize={"xl"} px={4}>
            If you are looking for an ambitious and motivated individual to join your team, I would be honored to have the opportunity to connect with you. Please feel free to reach out to me for further discussion.
            </Text>
            <Text color={`${color}.500`} fontWeight={600} fontSize={"lg"} px={4}>
            hang.pham@princeton.edu 
            </Text>
            <Center>
              <HStack pt={4} spacing={4}>
                <FaLinkedin onClick={linkedin} size={28} />
                <FaGithub onClick={github} size={28} />
                <FaEnvelope onClick={email} size={28} />
              </HStack>
            </Center>
            </Fade>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
export default Contact; 

