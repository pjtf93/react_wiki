import React from 'react';
import { Flex, Heading, Image, Spinner } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectAllPosts } from '../features/posts/postsSlice';

const MostReadPosts = () => {
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  return (
    <Flex w='20%' direction='column' align='center' justify='flex-start' mr={6}>
      <Heading as='h3' size='md' my={3}>
        Popular Now
      </Heading>
      <Flex
        w='100%'
        direction='column-reverse'
        align='center'
        justify='flex-start'
      >
        {postStatus === 'loading' ? (
          <>
            <Spinner size='xl' />
          </>
        ) : (
          posts.map((post) => (
            <Flex
              direction='column'
              h={64}
              w='80%'
              justify='space-around'
              align='stretch'
              shadow='md'
              my={5}
              key={post.id}
            >
              <Image src='https://picsum.photos/300/200?random=1' />
              <Heading
                as={ReactLink}
                to={{ pathname: `/post/${post.id}` }}
                size='sm'
                textAlign='center'
                key={post.id}
              >
                {post.title}
              </Heading>
            </Flex>
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default MostReadPosts;
