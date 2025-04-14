import React from 'react';
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Homepage from './Pages/Homepage';

function App() {
  const theme = createTheme({
    colors: {
      blue: [
        '#edf2ff', '#dee7ff', '#c3d1ff', '#9eb2ff', 
        '#7888ff', '#5860fc', '#3530f1', '#342cd6', 
        '#2b27ac', '#282788' // Removed extra shade (must be exactly 10)
      ],
      'mine-shift': [
        '#F0F0F0', '#C0C0C0', '#909090', '#606060',
        '#303030', '#202020', '#101010', '#080808',
        '#040404', '#000000' // Added missing comma and 10th shade
      ]
    }
  });

  return (
    <MantineProvider theme={theme}> {/* Added theme prop */}
      <Homepage />
    </MantineProvider>
  );
}

export default App;
