import React from 'react';
import { connect } from 'react-redux';
import Content from '../components/Content';

import { getAllUsers } from '../actions/usersActions';
import { getAllPosts } from '../actions/postsActions';
import { useEffect } from 'react';

const Home = (props) => {
  // console.log(reducers);
  // console.log(reducers.getAll());
  useEffect(() => {
    props.getAllUsers();
    // props.getAllPosts();
  }, []);

  // console.log(reducers.users);
  console.log(props);

  // console.log(props.usersReducer);

  return (
    <>
      <Content />
    </>
  );
};

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return { usersReducer, postsReducer };
};

const mapDispatchToProps = {
  getAllUsers,
  getAllPosts,
};

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
