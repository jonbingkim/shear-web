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
import logo from './images/shearLogo.png';

const theme = extendTheme({
  // theme configuration
});

function Header() {
  return (
    <ChakraProvider theme={theme}>
      <Box w='100%' color='primaryText' py='9' px='6'>
        <Flex justify='space-between' align='center' maxW='1200px' mx='auto'>
          <Image src={logo} boxSize="80px" alt="Logo" /> 
          <HStack spacing={10}>
            <Link href='#features' fontSize='2xl'>
              Features
            </Link>
            <Link href='#demo' fontSize='2xl'>
              Demo
            </Link>
            <Link href='#team' fontSize='2xl'>
              Team
            </Link>
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
