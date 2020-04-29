import React, { useState, useEffect } from 'react';
import { Flex, Heading, Image } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const API = 'https://dry-beyond-85304.herokuapp.com/api/publicaciones';

const Posts = () => {
  const initialState = useFetch(API);

  return (
    <Flex
      w='100%'
      minH=''
      justify='flex-start'
      align='center'
      direction='column'
    >
      <Heading>The Latest</Heading>

      {initialState.data.map((item) => (
        <Flex
          direction='column'
          h='50%'
          w='50%'
          align='stretch'
          justify='space-around'
          shadow='md'
          mt={6}
        >
          <Image src='https://picsum.photos/200' />

          <Heading
            as={ReactLink}
            to={{ pathname: `/post/${item.id}` }}
            key={item.title}
          >
            {item.title}
          </Heading>
          <Heading as='h4' size='sm' key={item.content}>
            {item.content}
          </Heading>
          <ReactLink to='/Post'> Continuar leyendo</ReactLink>
        </Flex>
      ))}
    </Flex>
  );
};

export default Posts;
