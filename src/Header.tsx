import React from 'react';
import {
  Box,
  Text,
  Flex,
  Link,
  HStack,
  ChakraProvider,
  extendTheme,
  Image,
} from '@chakra-ui/react';
import { animateScroll as scroll } from 'react-scroll';
import logo from './images/shearLogo.png';

const theme = extendTheme({
  // theme configuration
});

function Header() {
  // Function to handle smooth scrolling to a section with offset
  const scrollToSection = (id) => {
    scroll.scrollTo(id, {
      smooth: true,
      offset: -50, // Optional offset if you have fixed headers or other elements
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Box w='100%' color='primaryText' py='9' px='6' fontFamily='Lilita One'>
        <Flex justify='space-between' align='center' maxW='1200px' mx='auto'>
          <Image src={logo} boxSize="80px" alt="Logo" /> 
          <HStack spacing={10}>
            {/* Update the links with event handlers for smooth scrolling */}
            <Text onClick={() => scrollToSection('features')} cursor="pointer" fontSize='2xl'>
              Features
            </Text>
            <Text onClick={() => scrollToSection('demo')} cursor="pointer" fontSize='2xl'>
              Demo
            </Text>
            <Text onClick={() => scrollToSection('team')} cursor="pointer" fontSize='2xl'>
              Team
            </Text>
            <Link href='https://github.com/oslabs-beta/shear' isExternal fontSize='2xl'>
              GitHub
            </Link>
            <Link href='https://www.linkedin.com/company/shearlambda' isExternal fontSize='2xl'>
              LinkedIn
            </Link>
          </HStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Header;
