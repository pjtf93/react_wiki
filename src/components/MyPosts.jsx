import React from 'react';
import { Flex, Heading, Button, IconButton, Spinner } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const API = 'https://dry-beyond-85304.herokuapp.com/api/publicaciones';

const MyPosts = () => {
  const [{ data, isLoading }] = useFetch(API);

  const handleClick = (item) => {
    console.log(item);

    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    fetch(`https://dry-beyond-85304.herokuapp.com/api/publicaciones/${item}`, {
      method: 'DELETE',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <Flex
      flexDirection='row'
      height='100%'
      justifyContent='center'
      alignItems='stretch'
    >
      <Flex width='60%' flexDirection='column' alignItems='stretch' my={5}>
        <Flex justifyContent='space-between' my={5}>
          <Heading>My Posts</Heading>
          <IconButton
            as={ReactLink}
            to={{ pathname: `/newpost/` }}
            aria-label='Create a new post'
            icon='add'
          />
        </Flex>

        {isLoading ? (
          <>
            <Spinner size='xl' />
          </>
        ) : (
          data.data &&
          data.data.map((item) => (
            <Flex
              alignItems='center'
              justifyContent='space-between'
              my={5}
              shadow='md'
              p={5}
              key={item.id}
            >
              <Heading size='md'>{item.title}</Heading>
              <Flex>
                <Button
                  as={ReactLink}
                  to={{ pathname: `/updatepost/${item.id}` }}
                  variantColor='blue'
                  size='xs'
                  mx={1}
                >
                  Modify
                </Button>
                <Button
                  variant='solid'
                  variantColor='red'
                  size='xs'
                  mx={1}
                  onClick={() => handleClick(item.id)}
                >
                  Delete
                </Button>
              </Flex>
            </Flex>
          ))
        )}
      </Flex>
    </Flex>
  );
};

export default MyPosts;
