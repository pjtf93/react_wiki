import React from 'react';
import { Flex } from '@chakra-ui/core';
import Posts from './Posts';
import MostReads from './MostReads';

const Content = () => {
  const API = 'https://dry-beyond-85304.herokuapp.com/api/publicaciones';

  return (
    <Flex
      minH='100vh'
      align='stretch'
      justify='space-around'
      direction='row'
      mt={10}
    >
      <Posts API={API} />
      <MostReads />
    </Flex>
  );
};

export default Content;
