import React from 'react';
import Register from '../components/Register';
import { Flex } from '@chakra-ui/core';

const SignUp = () => {
  return (
    <Flex h='80vh' direction='column' justify='center' align='center'>
      <Register />
    </Flex>
  );
};

export default SignUp;
