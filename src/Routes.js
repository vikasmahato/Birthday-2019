import React from 'react';
import Layout from "./components/Layout";
import Home from "./components/Home";
import {Switch, Route} from 'react-router-dom';

const Routes = (props) => {
  return (
      <Layout>
        <Switch>
          <Route exact component={Home} path="/"/>
        </Switch>
      </Layout>
  )
}

export default Routes;
