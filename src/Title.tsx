import React from "react";
import { Box, Text, VStack, ChakraProvider, extendTheme,Button,Link } from '@chakra-ui/react';

function Title() {
  const theme = extendTheme({
    fonts: {
      heading: 'Inter, sans-serif',
      body: 'Inter, sans-serif',
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Box h='80vh' w='100%' padding='40px' margin='0'>
        <VStack
          spacing="8" 
          justify="center" 
          align="center" 
          height="full" 
        >
          <Text
            as="b"
            fontFamily="Lilita One"
            fontSize={["5xl", "6xl", "7xl"]}
            fontWeight="extrabold"
          >
            SHEAR
          </Text>
          <Text
            w={["80%", "70%", "50%"]}
            fontFamily="body"
            fontSize={["1xl", "2xl", "3xl"]}
            fontWeight="normal"
            color="gray.600"
          >
            Effortlessly enhance your AWS Lambda performance with automated power tuning.
          </Text>
          <Text
            w={["80%", "70%", "50%"]}
            fontFamily="body"
            fontSize={["1xl", "2xl", "3xl"]}
            fontWeight="normal"
            color="gray.600"
          >
            Maximize efficiency, minimize costs.
          </Text>
          <Button size='lg' borderColor="black"><Link href="https://github.com/oslabs-beta/shear/tree/dev">Get Started</Link></Button>
        </VStack>
      </Box>
    </ChakraProvider>
  )
}

export default Title;
