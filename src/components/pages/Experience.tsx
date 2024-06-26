import React, { useState, useEffect } from "react";
import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
  Button,
  ButtonGroup,
  Center
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import ExperienceArray from "../context/ExperienceArray";
import TagsArray from "../context/TagsArray";

interface ExperienceProps {
  color: string;
}

export default function Experience({ color }: ExperienceProps): JSX.Element {
  const experience = ExperienceArray();
  const options = TagsArray("ExperienceTags");
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    if (options.length > 0) {
      setSelected(options[0].value);
    }
  }, [options]);

  const handleSelected = (value: string) => {
    setSelected(value);
  };

  return (
    <>
      <Container maxW={"3xl"} id="experience">
        <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} pb={{ base: 20, md: 36 }}>
          <Stack align="center" direction="row" px={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Experience</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Center px={4}>
            <ButtonGroup variant="outline">
              {options.map((option) => (
                <Button
                  colorScheme={selected === option.value ? `${color}` : "gray"}
                  onClick={() => handleSelected(option.value)}
                  key={option.value}
                >
                  {option.value}
                </Button>
              ))}
            </ButtonGroup>
          </Center>
          <Stack px={4} spacing={4}>
            {experience
              .filter((exp) => exp.tags.includes(selected))
              .map((exp) => (
                <Fade bottom key={exp.company}>
                  <Card size="sm" width="100%">
                    <CardHeader>
                      <Flex justifyContent="space-between">
                        <HStack>
                          <Image src={`${process.env.PUBLIC_URL}/${exp.image}`} h={50} />
                          <Box px={2} align="left">
                            <Text fontWeight={600}>{exp.company}</Text>
                            <Text>{exp.position}</Text>
                          </Box>
                        </HStack>
                        <Text px={2} fontWeight={300}>
                          {exp.duration}
                        </Text>
                      </Flex>
                    </CardHeader>
                    <CardBody>
                      <Flex>
                        <List align="left" spacing={3}>
                          {exp.listItems.map((item, index) => (
                            <ListItem key={index}>
                              <ListIcon boxSize={6} as={ChevronRightIcon} color={`${color}.500`} />
                              {item}
                            </ListItem>
                          ))}
                        </List>
                      </Flex>
                    </CardBody>
                    <CardFooter>
                      <Flex flexWrap="wrap">
                        {exp.badges.map((badge) => (
                          <Badge key={badge.name} colorScheme={badge.colorScheme} mr={2} mb={2}>
                            {badge.name}
                          </Badge>
                        ))}
                      </Flex>
                    </CardFooter>
                  </Card>
                </Fade>
              ))}
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
