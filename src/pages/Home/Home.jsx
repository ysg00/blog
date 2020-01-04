import React, { Component } from 'react';
import Page from 'components/Page/Page';
import { Row, Col } from 'antd';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <Page pageTitle="Home Page" className="home">
        <Row type="flex" justify="center">
          
            <h1>Hello World!</h1>
          
        </Row>
        
        <Row gutter={[16, 16]}>
          <Col span={6} />
          <Col span={6} />
          <Col span={6} />
          <Col span={6} />
        </Row>
      </Page>
    );
  }
}

export default Home;