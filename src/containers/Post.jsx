import React from 'react';

import { Flex } from '@chakra-ui/core';

import PostComments from '../components/PostComments';
import SinglePostPage from '../components/SinglePagePost';

const Post = ({ match }) => {
  const { postId } = match.params;

  return (
    <Flex
      height='100vh'
      justifyContent='center'
      alignItems='flex-start'
      pt={10}
      pb={10}
      overflow='visible'
    >
      <Flex
        width='50%'
        height=''
        flexDirection='column'
        justifyContent='space-between'
        alignItems='stretch'
      >
        <SinglePostPage postId={postId} />
        <PostComments postId={postId} />
      </Flex>
    </Flex>
  );
};

export default Post;
