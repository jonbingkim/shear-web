import { useState } from 'react'
import Footer from './footer'
import Team from './team'
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
  

  return (
    <>
      <div>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
   
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
