import React from 'react';
import { Flex, Heading, Image } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const API = 'https://dry-beyond-85304.herokuapp.com/api/publicaciones';

const MostReads = () => {
  const initialState = useFetch(API);

  return (
    <Flex w='20%' direction='column' align='center' justify='flex-start' mr={6}>
      <Heading as='h3' size='md' my={3}>
        Popular Now
      </Heading>
      {initialState.data.map((item) => (
        <Flex
          direction='column'
          h={64}
          w='80%'
          justify='space-around'
          align='stretch'
          shadow='md'
          my={5}
          key={item.id}
        >
          <Image src='https://picsum.photos/300/200?random=1' />
          <Heading
            as={ReactLink}
            to={{ pathname: `/post/${item.id}` }}
            size='sm'
            textAlign='center'
            key={item.id}
          >
            {item.title}
          </Heading>
        </Flex>
      ))}
    </Flex>
  );
};

export default MostReads;
