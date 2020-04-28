import React from 'react';
import { Flex, Heading, FormControl, Input, Button } from '@chakra-ui/core';

const Log = () => {
  return (
    <Flex
      w='30%'
      h='70%'
      direction='column'
      justify='space-around'
      align='stretch'
      border='solid'
      p={5}
    >
      <Flex h='15%' justify='center' p={4}>
        <Heading>Log in</Heading>
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
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Button type='submit'>Sign Up</Button>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Log;
