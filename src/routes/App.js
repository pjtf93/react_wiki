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
import UpdatePost from '../components/UpdatePost';
import CategoriesPosts from '../containers/CategoriesPosts';
import { PostsList } from '../features/posts/PostsList';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/post/:id' component={Post} />
        <Route path='/categories/:id' component={CategoriesPosts} />
        <Route exact path='/myposts' component={MyPosts} />
        <Route exact path='/newpost' component={CreatePost} />
        <Route exact path='/updatepost/:id' component={UpdatePost} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/test' component={PostsList} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
