import React, { useEffect, useState } from 'react';
import { Flex, Image, Heading, Text, Tag } from '@chakra-ui/core';
import useFetch from '../hooks/useFetch';

const CompletePost = ({ id }) => {
  const API = `https://dry-beyond-85304.herokuapp.com/api/publicaciones/${id}`;
  const initialState = useFetch(API);

  return (
    <>
      <Image src='https://picsum.photos/400/400' />
      <Flex flexDirection='row' justify='center' align='center'>
        <Text
          width='auto'
          textAlign='justify'
          display='flex'
          height='auto'
          mr={5}
        >
          Autor
        </Text>
        <Text>{initialState.created_at}</Text>
        <Tag ml={5}>Categoria</Tag>
      </Flex>
      <Heading textAlign='justify'>{initialState.title}</Heading>
      <Text height='30%'>{initialState.content}</Text>
    </>
  );
};

export default CompletePost;
