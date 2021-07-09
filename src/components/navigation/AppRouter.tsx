import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as urls from './urls'
import { CreateOrganizationComponent } from "../organization/create/CreateOrganizationComponent";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={urls.createFirstUserPage} exact component={CreateOrganizationComponent}/>

      </Switch>
    </Router>
  );
};

export default AppRouter;