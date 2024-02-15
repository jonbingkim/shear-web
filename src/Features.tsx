import React from 'react';
import {
  Box,
  Text,
  Flex,
  Spacer,
  Stack,
  VStack,
  HStack,
  Grid,
  Center,
  ChakraProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react';

function Features() {
  return (
    <Box
      h="60%"
      w="100%"
      borderWidth="2px"
      borderColor="red.200"
      padding="20px"
      overflow=""
      bg="gray.200"
      margin="0px"
    >
      <VStack display="flex" justifyContent={'center'} padding="20px">
        <Box as="b" fontFamily="Lilita One" fontSize="80px" color="#4285F4">
          Features
        </Box>
        <Box w="50%" as="b" fontSize="20px" color="#4285F4"></Box>
      </VStack>
      <HStack
        display="flex"
        justifyContent="center"
        spacing={10}
        paddingTop="10px"
        paddingBottom="20px"
      >
        <VStack alignItems="center">
          <Box as="b" fontFamily="Lilita One" fontSize="36px" color="#4285F4">
            Optimization
          </Box>
          <Box
            as="b"
            fontFamily="Lilita One"
            fontSize="20px"
            bg="blue.200"
            padding="20px"
            w="300px"
            h="300px"
            color="#4285F4"
          >
            <span style={{ fontSize: '18px', fontFamily: 'Palatino' }}>
              Simply input the ARN of any Lambda function and your optimization
              specifications, and Shear automatically finds the cheapest
              or fastest memory configuration for that function.
              Shear fine-tunes its results, offering detailed analysis.
            </span>
          </Box>
        </VStack>

        <VStack alignItems="center">
          <Box as="b" fontFamily="Lilita One" fontSize="36px" color="#4285F4">
            Security
          </Box>
          <Box
            as="b"
            fontFamily="Lilita One"
            fontSize="20px"
            bg="blue.200"
            padding="20px"
            w="300px"
            h="300px"
            color="#4285F4"
          >
            <span style={{ fontSize: '18px', fontFamily: 'Palatino' }}>
              Shear allows you to optimize your functions without compromising.
              No need for unsafe access keys or publicly deploying your
              function. Your data is also encrypted in-flight via SSL,
              guaranteeing the safety of your information.
            </span>
          </Box>
        </VStack>

        <VStack alignItems="center">
          <Box as="b" fontFamily="Lilita One" fontSize="36px" color="#4285F4">
            Deployment
          </Box>
          <Box
            as="b"
            fontFamily="Lilita One"
            fontSize="20px"
            bg="blue.200"
            padding="20px"
            w="300px"
            h="300px"
            color="#4285F4"
          >
            <span style={{ fontSize: '18px', fontFamily : 'Palatino'}}>
              Shear offers sophisticated deployment options to suit your needs.
              You can choose between EC2, Fargate, or local hosting according to
              your preferences. AWS deployment is automated via CloudFormation
              for your convenience.
            </span>
          </Box>
        </VStack>
      </HStack>
    </Box>
  );
}

export default Features;
