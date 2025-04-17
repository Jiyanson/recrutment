import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Homepage from './Pages/Homepage';
import FindJobs from './Pages/FindJobs';

function App() {
  const theme = createTheme({
    colors: {
      blue: [
        '#edf2ff', '#dee7ff', '#c3d1ff', '#9eb2ff', 
        '#7888ff', '#5860fc', '#3530f1', '#342cd6', 
        '#2b27ac', '#282788'
      ],
      mineshaft: [
        '#F0F0F0', '#C0C0C0', '#909090', '#606060',
        '#303030', '#202020', '#101010', '#080808',
        '#040404', '#000000'
      ]
    }
  });

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Homepage />} />
          <Route path="/find-job" element={<FindJobs/>}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;