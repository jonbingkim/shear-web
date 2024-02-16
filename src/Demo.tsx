import React from 'react';
import { Box, Heading, Text, Image, Container,Center } from '@chakra-ui/react';
import demo from "./images/animation.gif"


const Demo = () => {
  return (
    <Center h="80vh"> 
      <Box
        w="85vw" 
        maxW="10xl" 
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        boxShadow="2xl"
        bg="white"
        my={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h2" size="xl" textAlign="center" mb={4} color="black.500">
          See Shear in Action
        </Heading>
        <Text fontSize="lg" color="gray.700" mb={6} textAlign="center">
        Configure, execute, and optimize. Analyze the performance metrics for your AWS Lambda functions.
        </Text>
        <Box w="100%" h="auto" overflow="hidden"> 
          <Image src={demo} alt="Demo GIF" objectFit="contain" w="100%" h="auto" />
        </Box>
      </Box>
    </Center>
  );
};

export default Demo;
``
