import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (
    <Box sx={{ width: 600 }}>
      <Skeleton animation='pulse' height={60}/>
      <Skeleton animation="wave" height={60}/>
      <Skeleton animation='pulse' height={60}/>
    </Box>
  );
}