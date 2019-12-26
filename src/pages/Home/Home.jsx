import React, { Component } from 'react';
import Page from 'components/Page/Page';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { routes } from 'utilities/Route/RouteConfig';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <Page pageTitle="Home Page" className="home">
        <h3>Hello World!</h3>
        <Link to={{pathname:routes.Test.route}}>
          <Button>
            Test
          </Button>
        </Link>
      </Page>
    );
  }
}

export default Home;