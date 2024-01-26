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
              Hello! I'm Thanh Hang (Hang) Pham, a Computer Science major at Princeton University with a passion for software development, machine learning, and finance. In fact, my first major system was an Android application used by over 300 members of the Vietnamese community in Houston, and my most recent was a website that improved the workflow of quality assurance testers at Aspiritech by around 40%. Though years lie between their development, the transformative power of effective software solutions remains clear, further solidifying my commitment to creating impactful software solutions.
            </Text>
          </Fade>
          <Fade up>
            <Text color={"white.600"} fontSize={"xl"} px={4}>
              As such, in addition to my academic journey at Princeton, I have participated in diverse experiences like software projects for startups like Ticket Wallet along with student organizations such as The Daily Princetonian and Hack4Impact. I am also currently working as a research assistant with a grad student in Princeton’s iRom Lab (Intelligent Robot Motion Lab), where we research uncertainty Alignment for Large Language Model Planners.
            </Text>
          </Fade>
          <Fade up>
            <Text color={"white.600"} fontSize={"xl"} px={4}>
              In addition to various collaborative and independent technical projects, I am very involved in my current community, whether through being a member of the student government, as a digital specialist for the university’s digital media space, or as a TA for the algorithm and data structure course. My experience, however, isn't limited to academia. I co-founded Alluring Vietnam, a non-profit aiming to promote the beauty of Vietnam's hidden gems, managing both its marketing and finances. Outside of my technical pursuits, I enjoy swimming, graphic design, video games, and puzzles (especially word games)!
            </Text>
          </Fade>
          <Fade up>
            <Text color={"white.600"} fontSize={"xl"} px={4}>
              Click <a href={process.env.PUBLIC_URL + "/assets/resume.pdf"} target="_blank" style={{ textDecoration: 'underline' }}>here</a> for my resume!
            </Text>
          </Fade>
        </Stack>
      </Container>
    </>
  );
}

export default About;
