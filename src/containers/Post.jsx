import React from 'react';

import { Flex } from '@chakra-ui/core';
import CompletePost from '../components/CompletePost';
import Comments from '../components/Comments';

const Post = ({ match }) => {
  const {
    params: { id },
  } = match;
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
        <CompletePost id={id} />
        <Comments />
      </Flex>
    </Flex>
  );
};

export default Post;
