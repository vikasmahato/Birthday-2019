import React from 'react';
import Layout from "./components/Layout";
import Home from "./components/Home";
import {Switch, Route} from 'react-router-dom';
import Create from './components/MoreMessages/Create';

const Routes = (props) => {
  return (
      <Layout>
        <Switch>
          <Route exact component={Home} path="/"/>
            <Route path='/create' component={Create} />
        </Switch>
      </Layout>
  )
}

export default Routes;
