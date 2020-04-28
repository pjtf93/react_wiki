import React from 'react';
import { Flex } from '@chakra-ui/core';
import Posts from './Posts';
import MostReads from './MostReads';

const Content = () => {
  return (
    <Flex
      minH='100vh'
      align='stretch'
      justify='space-around'
      direction='row'
      mt={10}
    >
      <Posts />
      <MostReads />
    </Flex>
  );
};

export default Content;
