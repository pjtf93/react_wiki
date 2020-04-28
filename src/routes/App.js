import React from 'react';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Post from '../containers/Post';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/post/:id' component={Post} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
