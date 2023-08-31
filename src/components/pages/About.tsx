import React from "react";
import { Fade } from "react-reveal";
import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
} from "@chakra-ui/react";

interface AboutProps {
  color: string;
}

const About: React.FC<AboutProps> = ({ color }) => {
  return (
    <>
      <Container maxW={"3xl"} id="about">
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                01
              </Text>
              <Text fontWeight={800}>About</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Fade up>
            <Text color={"white.600"} fontSize={"xl"} px={4}>
              My name is Hang Pham, and I am a full-stack and mobile developer
              with an interest in machine learning, finance and diplomacy. I
              currently study at Princeton University for a BSE degree in
              Computer Science, along with minors in Statistics,
              Machine Learning and Finance. Currently, I contribute to the
              website and mobile development for The Daily Princetonian, am 
              a Digital Specialist for Princeton's Digital Learning Lab, and 
              a TA for Princeton's Algorithm and Data Structure course.
              With an interest in ML, I also act as the social chair for
              Princeton Data Science Club.
            </Text>
          </Fade>
          <Fade up>
            <Text color={"white.600"} fontSize={"xl"} px={4}>
              In my leisure time, I enjoy game development, writing poems,
              playing the piano, and swimming. I also love designing graphics
              and am currently a Graphic Designer for Princeton University
              Student Government (USG) and IgniteSTEM (a branch of Princeton's
              E-Club). I also co-founded a non-profit called Alluring Vietnam
              in high school, which showcases Vietnam's hidden gems through
              videos and workshops!
            </Text>
          </Fade>
          <Fade up>
          <Text color={"white.600"} fontSize={"xl"} px={4}>
            Click <a href={process.env.PUBLIC_URL + "/assets/resume.pdf"} target="_blank" style={{textDecoration: 'underline'}}>here</a> for my resume!
          </Text>
          </Fade>
        </Stack>
      </Container>
    </>
  );
}

export default About;
