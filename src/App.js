import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import CompanyList from './components/CompanyList';
// import CompanyCard from './components/CompanyCard';
import StudentInfo from './components/StudentInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/companies" component={CompanyList} />
            <Route path="/student-info" component={StudentInfo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 