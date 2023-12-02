import React from 'react';
import { ThemeProvider } from 'styled-components';
// import Hero from './pages/hero/Hero';
import Home from './pages/home/Home';
import { theme } from './themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
