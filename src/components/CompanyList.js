import React, { Component } from 'react'
import CompanyCard from './CompanyCard';
import { NavLink } from 'react-router-dom'; 
import PropTypes from "prop-types";
import { Route, Switch, withRouter } from 'react-router-dom';

class CompanyList extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render() {
    const { location } = this.props;
    const companyId = '37BMJDH00092';
    return (
      <div>
        {this.props.location.pathname === '/companies' ? <h1>Company List</h1> : <h1>Company Name</h1>}
        <div>You are now at {location.pathname}</div>
        <Switch>
          <Route path={`/companies/:${companyId}`} component={CompanyCard} />
        </Switch>
        <NavLink to={`/companies/:${companyId}`}>Company Card</NavLink>
      </div>
    )
  }
}

export default CompanyList;