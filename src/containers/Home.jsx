import React from 'react';
import { Flex } from '@chakra-ui/core';
import PostsList from '../components/PostsList';
import MostReadPosts from '../components/MostReadPosts';

const Home = () => {
  console.log();

  return (
    <Flex
      minH='100vh'
      align='stretch'
      justify='space-around'
      direction='row'
      mt={10}
    >
      <PostsList />
      <MostReadPosts />
    </Flex>
  );
};

export default Home;
