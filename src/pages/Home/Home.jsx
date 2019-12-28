import React, { Component } from 'react';
import Page from 'components/Page/Page';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <Page pageTitle="Home Page" className="home">
        <h3>Hello World!</h3>
      </Page>
    );
  }
}

export default Home;