import React from 'react';
import { Flex, Image, Heading, Text, Tag } from '@chakra-ui/core';
import useFetch from '../hooks/useFetch';

const CompletePost = ({ id }) => {
  const API = `https://dry-beyond-85304.herokuapp.com/api/publicaciones/${id}`;
  const initialState = useFetch(API);

  return (
    <>
      <Image src='https://picsum.photos/600/600?random' />
      {initialState.user && (
        <>
          <Flex flexDirection='row' justify='center' align='center' my={5}>
            <Text
              width='auto'
              textAlign='justify'
              display='flex'
              height='full'
              mr={5}
            >
              {initialState.user.first_name} {initialState.user.last_name}
            </Text>
            <Text>{initialState.created_at}</Text>
            <Tag ml={5}>{initialState.category.name}</Tag>
          </Flex>
          <Heading textAlign='justify' my={5}>
            {initialState.title}
          </Heading>
          <Text height='30%' my={5}>
            {initialState.content}
          </Text>
        </>
      )}
    </>
  );
};

export default CompletePost;
