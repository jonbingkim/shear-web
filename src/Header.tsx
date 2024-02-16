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

function Header({ onSectionClick }) {
  return (
    <ChakraProvider theme={theme}>
      <Box w='100%' color='primaryText' py='9' px='6' fontFamily='Lilita One'>
        <Flex justify='space-between' align='center' maxW='1200px' mx='auto'>
          <Image src={logo} boxSize="80px" alt="Logo" />
          <HStack spacing={10}>
            <Text cursor="pointer" fontSize='2xl' onClick={() => onSectionClick('features')}>
              Features
            </Text>
            <Text cursor="pointer" fontSize='2xl' onClick={() => onSectionClick('demo')}>
              Demo
            </Text>
            <Text cursor="pointer" fontSize='2xl' onClick={() => onSectionClick('team')}>
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
