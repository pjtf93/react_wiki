import React from 'react';
import { Flex } from '@chakra-ui/core';
import Posts from '../components/Posts';

const CategoriesPosts = ({ match }) => {
  const {
    params: { id },
  } = match;
  const API = `https://dry-beyond-85304.herokuapp.com/api/categorias/${id}`;

  return (
    <Flex
      minH='100vh'
      align='stretch'
      justify='space-around'
      direction='row'
      mt={10}
    >
      <Posts API={API} />
    </Flex>
  );
};

export default CategoriesPosts;
