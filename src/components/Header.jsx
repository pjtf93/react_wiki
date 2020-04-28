import React from 'react';
import { Flex, Heading, Link } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

const Header = () => {
  return (
    <Flex as='nav' justify='space-between'>
      <Heading as={ReactLink} to='/' size={'lg'} ml={16} p={3}>
        React Wiki
      </Heading>
      <Heading as='h3' size={'lg'} p={3}>
        <Link as={ReactLink} to='/Login' p={3}>
          Login
        </Link>
        <Link as={ReactLink} to='/SignUp' p={3}>
          Sign Up
        </Link>
      </Heading>
    </Flex>
  );
};

export default Header;
