import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as urls from './urls'
import { CreateOrganizationComponent } from "../organization/create/CreateOrganizationComponent";
import { OrganizationPage } from "../organization/organizationPage/OrganizationPage";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={urls.createFirstUserPage} exact component={CreateOrganizationComponent}/>
        <Route path={urls.organizationPage(':organizationId')} exact component={OrganizationPage}/>

      </Switch>
    </Router>
  );
};

export default AppRouter;