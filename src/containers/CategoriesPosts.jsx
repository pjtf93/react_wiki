import React from 'react';
import { Flex } from '@chakra-ui/core';
import PostsList from '../components/PostsList';

const CategoriesPosts = ({ match }) => {
  const { categoriesId } = match.params;

  return (
    <Flex
      minH='100vh'
      align='stretch'
      justify='space-around'
      direction='row'
      mt={10}
    >
      <PostsList categoriesId={categoriesId} />
    </Flex>
  );
};

export default CategoriesPosts;
