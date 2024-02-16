

import { ChakraProvider, Flex, VStack } from '@chakra-ui/react';
import Header from './Header.js';
import Title from './Title.js';
import Features from './Features.js';
import Demo from './Demo.js';
import Team from './team.js';
import React, { useRef } from 'react';
import Footer from './footer.js';
import './style.css';
import pic from "./images/pic2.jpg"

function App() {

  const featuresRef = useRef(null);
  const demoRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });

  const onSectionClick = (section) => {
    if (section === 'features') scrollToRef(featuresRef);
    else if (section === 'demo') scrollToRef(demoRef);
    else if (section === 'team') scrollToRef(teamRef);
  };


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
          <Header onSectionClick={onSectionClick}/>
          <Title />
          <div ref={featuresRef}>
            <Features />
          </div>
          <div ref={demoRef}>
          <Demo  />
          </div>
          <div ref={teamRef}>
          <Team />
          </div>
          <Footer />
        </VStack>
      </Flex>
    </ChakraProvider>
  )
}

export default App;
