import React from 'react'
import {BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from './MainRoutes'
import { ChakraProvider } from '@chakra-ui/react'
import GlobalFonts from '../src/assets/fonts/fonts';

function App() {
  return (
    <Router>
      <GlobalFonts />
      <ChakraProvider>
        <MainRoutes />
      </ChakraProvider>      
    </Router>    
  );
}

export default App;
