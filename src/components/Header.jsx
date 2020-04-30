import React from 'react';
import { Flex, Heading, Link } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

const Header = () => {
  return (
    <Flex as='nav' justify='space-between'>
      <Heading as={ReactLink} to='/' size={'lg'} ml={16} p={4}>
        React Wiki
      </Heading>
      <Heading as='h4' size={'lg'} p={4}>
        <Link as={ReactLink} to='/myposts' p={4}>
          My posts
        </Link>
        <Link as={ReactLink} to='/Login' p={4}>
          Login
        </Link>
        <Link as={ReactLink} to='/SignUp' p={4}>
          Sign Up
        </Link>
      </Heading>
    </Flex>
  );
};

export default Header;
