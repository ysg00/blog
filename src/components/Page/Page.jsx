import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import './Page.scss';

const Page = ({ pageTitle, className, children }) => {
  return (
    <Container fluid className="page">
      <Row className="flex-grow-0">
        <Col>
          <h1 role="banner" className="page-header">{pageTitle}</h1>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col role="main" className="main-content">
          <div className={className}>
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Page.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.element.isRequired
};

export default Page;
