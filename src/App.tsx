import { useState } from 'react'
import { Box, Text, Flex, Spacer, Stack, VStack, Grid, Center, Button, ChakraProvider, extendBaseTheme, theme as chakraTheme, } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './Header.js';
import Title from './Title.js';
import Features from './Features.js';
import Demo from './Demo.js';
import './style.css'
import Root from "./routes/root";


const theme = extendBaseTheme({
  components: {
    Button,
  },
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (

    <ChakraProvider theme={theme}>
      <Flex width={"100vw"} height={"100vh"} alignItems={"start"} justifyContent={"center"} >

        <VStack spacing={0} align='center' w='60%' bg='gray.100' height={"100vh"}>
          <Header />
          <Title />
          <Features />
          <Demo />
        </VStack >
      </Flex>

    </ChakraProvider >
  )
}

export default App
