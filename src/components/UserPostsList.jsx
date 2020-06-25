import React from 'react';

import { Flex, Heading, Button, IconButton, Spinner } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, deletePost } from '../features/posts/postsSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const UserPostsList = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  const postStatus = useSelector((state) => state.posts.status);

  const handleClick = async (item) => {
    console.log(item);

    try {
      const deleteAction = await dispatch(deletePost(item));
      unwrapResult(deleteAction);
    } catch (err) {
      console.error('Failed to save the post: ', err);
    }
  };

  return (
    <Flex
      flexDirection='row'
      height='100%'
      justifyContent='center'
      alignItems='stretch'
    >
      <Flex width='60%' flexDirection='column' alignItems='stretch' my={5}>
        <Flex justifyContent='space-between' my={5}>
          <Heading>My Posts</Heading>
          <IconButton
            as={ReactLink}
            to={{ pathname: `/newpost/` }}
            aria-label='Create a new post'
            icon='add'
          />
        </Flex>

        {postStatus === 'loading' ? (
          <>
            <Spinner size='xl' />
          </>
        ) : (
          posts &&
          posts.map((item) => (
            <Flex
              alignItems='center'
              justifyContent='space-between'
              my={5}
              shadow='md'
              p={5}
              key={item.id}
            >
              <Heading size='md'>{item.title}</Heading>
              <Flex>
                <Button
                  as={ReactLink}
                  to={{ pathname: `/updatepost/${item.id}` }}
                  variantColor='blue'
                  size='xs'
                  mx={1}
                >
                  Modify
                </Button>
                <Button
                  variant='solid'
                  variantColor='red'
                  size='xs'
                  mx={1}
                  onClick={() => handleClick(item.id)}
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default UserPostsList;
