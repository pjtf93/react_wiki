import React from 'react';
import { Flex, Image, Heading, Text, Tag, Spinner } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectPostById } from '../features/posts/postsSlice';

const CompletePost = ({ postId }) => {
  const post = useSelector((state) => selectPostById(state, postId));

  // console.log(postId);
  // console.log(post);

  return (
    <>
      {!post ? (
        <>
          <Spinner size='xl' />
        </>
      ) : (
        <>
          <Image src='https://picsum.photos/600/600?random' />
          <Flex flexDirection='row' justify='center' align='center' my={5}>
            <Text
              width='auto'
              textAlign='justify'
              display='flex'
              height='full'
              mr={5}
            >
              {post.user.first_name} {post.user.last_name}
            </Text>
            <Text>{post.created_at}</Text>
            <Tag
              as={ReactLink}
              to={{ pathname: `/categories/${post.category.id}` }}
              ml={5}
            >
              {post.category.name}
            </Tag>
          </Flex>
          <Heading textAlign='justify' my={5}>
            {post.title}
          </Heading>
          <Text height='30%' my={5}>
            {post.content}
          </Text>
        </>
      )}
    </>
  );
};

export default CompletePost;
