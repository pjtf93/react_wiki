import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';
import SignUp from '../containers/SignUp';
import Post from '../containers/Post';
import UserPostsList from '../components/UserPostsList';
import UpdateUserPost from '../components/UpdateUserPost';
import CategoriesPosts from '../containers/CategoriesPosts';
import CreatePostForm from '../components/CreatePostForm';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/post/:postId' component={Post} />
        <Route path='/categories/:categoriesId' component={CategoriesPosts} />
        <Route exact path='/myposts' component={UserPostsList} />
        <Route exact path='/newpost' component={CreatePostForm} />
        <Route exact path='/updatepost/:postId' component={UpdateUserPost} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
