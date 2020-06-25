import React from 'react';
import { Flex, Image, Heading, Text, Tag, Spinner } from '@chakra-ui/core';
import useFetch from '../hooks/useFetch';
import { Link as ReactLink } from 'react-router-dom';

const CompletePost = ({ id }) => {
  const API = `https://dry-beyond-85304.herokuapp.com/api/publicaciones/${id}`;
  const [{ data, isLoading }] = useFetch(API);

  return (
    <>
      <Image src='https://picsum.photos/600/600?random' />
      {isLoading ? (
        <>
          <Spinner size='xl' />
        </>
      ) : (
        data.user && (
          <>
            <Flex flexDirection='row' justify='center' align='center' my={5}>
              <Text
                width='auto'
                textAlign='justify'
                display='flex'
                height='full'
                mr={5}
              >
                {data.user.first_name} {data.user.last_name}
              </Text>
              <Text>{data.created_at}</Text>
              <Tag
                as={ReactLink}
                to={{ pathname: `/categories/${data.category.id}` }}
                ml={5}
              >
                {data.category.name}
              </Tag>
            </Flex>
            <Heading textAlign='justify' my={5}>
              {data.title}
            </Heading>
            <Text height='30%' my={5}>
              {data.content}
            </Text>
          </>
        )
      )}
    </>
  );
};

export default CompletePost;
