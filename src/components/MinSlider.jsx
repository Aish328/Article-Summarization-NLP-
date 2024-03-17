import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function MinSlider({range, setRange}) {
    function valuetext(value) {
        const minvalue = range[1];
        setRange([value, minvalue]);
    }
  return (
    <Box sx={{ width: 200 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={20}
        getAriaValueText={valuetext}
        step={1}
        marks
        min={0}
        max={1000}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}