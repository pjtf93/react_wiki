import React, { useState, useEffect } from 'react';
import { Flex, Heading, Image } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: [],
      title: [],
      content: [],
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
  console.log(posts);

  return (
    <Flex
      w='100%'
      minH=''
      justify='flex-start'
      align='center'
      direction='column'
    >
      <Heading>The Latest</Heading>

      {posts.map((item) => (
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
