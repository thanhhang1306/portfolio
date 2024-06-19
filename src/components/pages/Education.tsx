import React from "react";
import { Slide } from "react-reveal";
import { Divider, Stack, Text, Container, Box, HStack } from "@chakra-ui/react";

interface Event {
  title: string;
  date: string;
  description: string;
}

interface EducationProps {
  color: string;
}

const Education: React.FC<EducationProps> = ({ color }) => {
  const events: Event[] = [
    {
      title: "Princeton University (Princeton, NJ)",
      date: "August '22 - June '26",
      description:
        "➳  GPA: 3.92/4.00\n➳ BSE: Computer Science\n➳ Minors: Statistics and Machine Learning, Finance \n➳ CS Courses: Algorithm & Data Structures, Intro. to Programming Systems, Machine Learning, Probability & Stochastic Systems, Business & Innovation, Reasoning About Computation, Distributed Systems, Economics & Computing, Statistics, Theory of Natural Algorithms (active), Financial Investments (active), Regression & Applied Time Series (active)."
    },
    {
      title: "Lamar High School (Houston, TX)",
      date: "January '20 - June '22",
      description:
        "➳  Unweighted GPA: 4.00/4.00; Weighted GPA: 4.77/5.00\n➳  SAT: 1570 (R/W: 770, M: 800)\n➳ IB Diploma Candidate (43/45)"
    },
    {
      title: "Vinschool Times City (Hanoi, Vietnam)",
      date: "August '18 - December '19",
      description: "➳ One of ten full-scholarship recipients in Vietnam for IGCSE-Cambridge Program"
    }
  ];

  return (
    <>
      <Container maxW={"3xl"} id="education">
        <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} pb={{ base: 20, md: 36 }}>
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                02
              </Text>
              <Text fontWeight={800}>Education</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>

          {events.map((event, index) => (
            <Slide left key={index}>
              <Stack direction="row" spacing={0} align="center">
                <Stack
                  spacing={4}
                  py={2}
                  pr={4}
                  pl={6}
                  borderLeftWidth="2px"
                  borderLeftColor={`${color}.400`}
                  textAlign="left"
                >
                  <Text fontWeight="bold" fontSize="xl">
                    {event.title}
                  </Text>
                  <Text fontStyle="italic" fontSize="l">
                    {event.date}
                  </Text>
                  <Text whiteSpace="pre-line">{event.description}</Text>
                </Stack>
              </Stack>
            </Slide>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default Education;
