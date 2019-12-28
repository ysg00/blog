import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'pages/Home/Home';
import TestPage from 'pages/Test/Test';
import NotFoundPage from 'pages/NotFound/NotFound';
import { routes } from 'utilities/Route/RouteConfig.js';
import './MainContent.scss';

const MainContent = (props) => {
  return (
    <div className="MainContent">
      <Switch>
        <Route exact path={routes.Home.route} component={HomePage} />
        <Route exact path={routes.Test.route} component={TestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}


export default MainContent;