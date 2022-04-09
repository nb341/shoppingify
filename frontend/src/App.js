import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme
} from '@chakra-ui/react';
import { Sidebar } from './components/Sidebar';
import Items from './components/Items';
import ThreewaySplit from './_Layouts/ThreewaySplit';
import HomePage from './pages/HomePage';

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'gray.50',
        color: 'gray.500',
      },
      // styles for the `a`
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxW={"100vw"}>
          <HomePage/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
