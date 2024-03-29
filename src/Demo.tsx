import React from 'react';
import { Box, Heading, Text, Image, Container,Center } from '@chakra-ui/react';
import demo from "./images/animation.gif"


const Demo = () => {
  return (
    <Center h="80vh" marginTop='30px'> 
      <Box
        w="85vw" 
        maxW="10xl" 
        borderWidth="0px"
        borderRadius="lg"
        overflow="hidden"
        p={5}
        bg="transparent"
        my={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading as="h2" size="xl" textAlign="center" mb={4} color="black.500" fontFamily='Lilita One'>
          Shear In Action
        </Heading>
        <Text fontSize="lg" color="gray.700" mb={6} textAlign="center">
        Configure, execute, and optimize. Analyze the performance metrics for your AWS Lambda functions.
        </Text>
        <Box w="100%" h="auto" overflow="hidden"> 
          <Image src={demo} alt="Demo GIF" objectFit="contain" w="100%" h="450px" />
        </Box>
      </Box>
    </Center>
  );
};

export default Demo;
``
