import React, { useState, useEffect } from 'react';
import { Box, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';

const boardSize = 8;
const initialBoard = () => {
  const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));
  board[3][3] = 'W';
  board[3][4] = 'B';
  board[4][3] = 'B';
  board[4][4] = 'W';
  return board;
};

const OthelloBoard = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isDesktop] = useMediaQuery('(min-width: 48em)');

  const renderCell = (rowIndex, colIndex) => {
    const cell = board[rowIndex][colIndex];
    const color = cell === 'B' ? 'black' : 'white';
    return (
      <GridItem
        w="100%"
        h="100%"
        bg={cell ? color : 'transparent'}
        border="1px solid white"
        onClick={() => handleCellClick(rowIndex, colIndex)}
      />
    );
  };

  const handleCellClick = (row, col) => {
    // Placeholder for move logic
    console.log(`Clicked row ${row}, col ${col}`);
  };

  return (
    <Box w="100%" p={4}>
      <Grid templateColumns={`repeat(${boardSize}, 1fr)`} gap={1} bg="green.800" p={1}>
        {board.map((row, rowIndex) =>
          row.map((_, colIndex) => renderCell(rowIndex, colIndex))
        )}
      </Grid>
    </Box>
  );
};

export default OthelloBoard;