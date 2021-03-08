import React, { useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { indigo, pink } from '@material-ui/core/colors';

import App from './pages/App';

function ThemeApp() {
  useEffect(() => {}, []);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: indigo[800],
      },
      secondary: {
        main: pink[500],
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
