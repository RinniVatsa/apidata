
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './pages/FirstPage';
import SecondPageComponent1 from './pages/SecondPageComponent1';
import SecondPageComponent2 from './pages/SecondPageComponent2';

import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a light theme with updated colors
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Update with your desired light primary color
    },
    secondary: {
      main: '#f50057', // Update with your desired light secondary color
    },
    // Customize other palette colors as needed
  },
  // Add other theme customization options here
});

function App() {
  
  return (


    <Router>
          <ThemeProvider theme={lightTheme}></ThemeProvider>
      <Routes>
        <Route  path="/" element={ <FirstPage/>} />
        <Route path="/second"   element={<SecondPageComponent1/>} />
        <Route path="/department-list"  element={<SecondPageComponent2/>} />
    
      </Routes>
    </Router>
   
  );
}

export default App;
