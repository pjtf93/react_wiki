import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Post from '../containers/Post';
import MyPosts from '../components/MyPosts';
import CreatePost from '../components/CreatePost';
import ModifyPost from '../components/ModifyPost';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/post/:id' component={Post} />
        <Route path='/post/:category_id' component={Post} />
        <Route exact path='/myposts' component={MyPosts} />
        <Route exact path='/newpost' component={CreatePost} />
        <Route exact path='/modifypost' component={ModifyPost} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
