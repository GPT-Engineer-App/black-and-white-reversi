import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const PlayerIndicator = ({ currentPlayer }) => {
  return (
    <Box p={4} bg="gray.700" color="white">
      <Text fontSize="xl">Current Player: {currentPlayer === 'B' ? 'Black' : 'White'}</Text>
    </Box>
  );
};

export default PlayerIndicator;