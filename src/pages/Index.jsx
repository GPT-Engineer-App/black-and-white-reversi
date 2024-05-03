import React, { useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import OthelloBoard from '../components/OthelloBoard';
import PlayerIndicator from '../components/PlayerIndicator';

const Index = () => {
  const [currentPlayer, setCurrentPlayer] = useState('B'); // B for Black, W for White

  return (
    <Flex direction="column" align="center" justify="center" minH="100vh" bg="gray.900">
      <Heading mb={4} color="white">Othello Game</Heading>
      <PlayerIndicator currentPlayer={currentPlayer} />
      <OthelloBoard />
    </Flex>
  );
};

export default Index;