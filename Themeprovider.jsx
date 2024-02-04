// ThemeProvider.js
import React, { createContext, useContext, useState } from 'react';
import { ChakraProvider, ColorModeProvider, CSSReset, theme } from '@chakra-ui/react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <ChakraProvider theme={isDarkMode ? theme.dark : theme.light}>
        <ColorModeProvider
          options={{
            useSystemColorMode: false,
            initialColorMode: isDarkMode ? 'dark' : 'light',
          }}
        >
          <CSSReset />
          {children}
        </ColorModeProvider>
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
