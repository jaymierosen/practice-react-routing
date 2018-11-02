import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import CompanyList from './components/CompanyList';
import StudentInfo from './components/StudentInfo';

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/company-list" component={CompanyList} />
            <Route path="/student-info" component={StudentInfo} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default Main; 