// DarkModeSwitcher.js
import React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';

const DarkModeSwitcher = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle Dark Mode
    </Button>
  );
};

export default DarkModeSwitcher;
