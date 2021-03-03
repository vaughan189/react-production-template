import React from 'react';
import Navbar from '../../components/NavBar/Navbar';

class Home extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container my-5">
          <p>{'message.home.content'}</p>
        </div>
      </>
    );
  }
}

export default Home;
