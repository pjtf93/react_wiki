import React, { useEffect, useState } from 'react';
import { Flex, Heading, Image } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

const MostReads = () => {
  const [posts, setPosts] = useState([
    {
      id: [],
      title: [],
    },
  ]);

  useEffect(() => {
    const url = new URL(
      'https://dry-beyond-85304.herokuapp.com/api/publicaciones'
    );

    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => setPosts(json.data));
  }, []);

  return (
    <Flex w='20%' direction='column' align='center' justify='flex-start' mr={6}>
      <Heading as='h3' size='md'>
        Popular Now
      </Heading>
      {posts.map((item) => (
        <Flex
          direction='column'
          h='30%'
          w='100%'
          justify='space-around'
          align='stretch'
          shadow='md'
        >
          <Image h='100px' w='100%' />
          <Heading as={ReactLink} to='/Post' textAlign='center'>
            {item.title}
          </Heading>
        </Flex>
      ))}
    </Flex>
  );
};

export default MostReads;
