import React from 'react';
import { Flex, Heading, FormControl, Input, Button } from '@chakra-ui/core';

const Register = () => {
  return (
    <Flex
      width='30%'
      height='70%'
      direction='column'
      justify='space-around'
      align='stretch'
      border='solid'
      p={5}
    >
      <Flex h='15%' justify='center' p={4}>
        <Heading>Create an Account</Heading>
      </Flex>
      <Flex as='form' direction='column' h='70%'>
        <FormControl
          h='100%'
          isRequired
          display='flex'
          flexDirection='column'
          justifyContent='space-around'
          p={6}
        >
          <Input placeholder='Nombre' />
          <Input placeholder='Apellido' />
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Button type='submit'>Sign Up</Button>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Register;
