import React from 'react';
import { Router } from 'react-router-dom';
import history from '../routes/History';
import Routes from '../routes/Routes';

// import Navbar from '../components/NavBar/Navbar';
// import { MaterialSnackbar } from '../components/Snackbar/Snackbar';

function App() {
  return (
    <Router history={history}>
      {/* <MaterialSnackbar /> */}
      <Routes />
    </Router>
  );
}

export default App;
