import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalFonts from '../src/assets/fonts/fonts';
import theme from "./theme"

function App() {
  return (
    <Router>
      <GlobalFonts />
      <ChakraProvider theme={theme}>
        <MainRoutes />
      </ChakraProvider>      
    </Router>    
  );
}

export default App;
