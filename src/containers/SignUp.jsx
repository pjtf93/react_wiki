import React from 'react';
import CreateUserForm from '../components/CreateUserForm';
import { Flex } from '@chakra-ui/core';

const SignUp = () => {
  return (
    <Flex h='80vh' direction='column' justify='center' align='center'>
      <CreateUserForm />
    </Flex>
  );
};

export default SignUp;
