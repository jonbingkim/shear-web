// import { useState } from 'react'
// import Footer from './footer'
// import Team from './team'
// import { Box, Text, Flex, Spacer, Stack, VStack, Grid, Center, Button, ChakraProvider, extendBaseTheme, theme as chakraTheme, } from '@chakra-ui/react'
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from './Header.js';
// import Title from './Title.js';
// import Features from './Features.js';
// import Demo from './Demo.js';
// import './style.css'
// import Root from "./routes/root";


// const theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// })


// function App() {


//   return (
//     <ChakraProvider theme={theme}>
//       <Flex width={"100vw"} height={"100vh"} alignItems={"start"} justifyContent={"center"} >

//         <VStack spacing={0} align='center' w='100%' bg='gray.100' height={"100vh"}>
//           <Header />
//           <Title />
//           <Features />
//           <Demo />
//           <Team />
//           <Footer />
//         </VStack >
//       </Flex>

//     </ChakraProvider >
//   )
// }

// export default App


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
