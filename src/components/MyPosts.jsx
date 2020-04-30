import React from 'react';
import { Flex, Heading, Button } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

const MyPosts = () => {
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
          <Heading as={ReactLink} to={{ pathname: `/newpost/` }}>
            New Post
          </Heading>
        </Flex>
        <Flex
          alignItems='center'
          justifyContent='space-between'
          my={5}
          shadow='md'
          p={5}
        >
          <Heading size='md'>Titulo Post 1</Heading>
          <Flex>
            <Button variantColor='blue' size='xs' mx={1}>
              Modify
            </Button>
            <Button variant='solid' variantColor='red' size='xs' mx={1}>
              Delete
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MyPosts;
