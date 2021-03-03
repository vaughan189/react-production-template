import React, { useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import App from './pages/App';

function ThemeApp() {
  useEffect(() => {}, []);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ac4556',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

export default ThemeApp;
