import React from 'react';
import Log from '../components/Log';
import { Flex } from '@chakra-ui/core';

const Login = () => {
  return (
    <Flex h='80vh' direction='column' justify='center' align='center'>
      <Log />
    </Flex>
  );
};

export default Login;
