

import { ChakraProvider, Flex, VStack } from '@chakra-ui/react';
import Header from './Header.js';
import Title from './Title.js';
import Features from './Features.js';
import Demo from './Demo.js';
import Team from './team.js';
import Footer from './footer.js';
import './style.css';
import pic from "./images/pic.jpg"

function App() {
  return (
    <ChakraProvider>
      <Flex
        width="100vw"
        height="auto" 
        minHeight="100vh" 
        alignItems="start"
        justifyContent="center"
        bgImage={`url(${pic})`}
        bgRepeat="no-repeat"
        bgSize="cover" 
        bgPosition="center" 
      >
        <VStack spacing={0} align='center' w='100%' height="auto" overflow="hidden">
          <Header />
          <Title />
          <Features />
          {/* <Demo /> */}
          <Team />
          <Footer />
        </VStack>
      </Flex>
    </ChakraProvider>
  )
}

export default App;
