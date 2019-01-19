import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../../index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
          <h1 className="tc">Welcome to MERN+Auth Starter!</h1>
        <Footer />
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps() {
  return {

  };
}

export default connect(mapStateToProps)(App);
