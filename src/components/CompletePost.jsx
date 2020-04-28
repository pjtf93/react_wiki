import React, { useEffect, useState } from 'react';
import { Flex, Image, Heading, Text, Tag } from '@chakra-ui/core';

const CompletePost = ({ id }) => {
  const [post, setPost] = useState([
    {
      id: [],
      title: [],
      content: [],
      created_at: [],
    },
  ]);

  useEffect(() => {
    const url = new URL(
      `https://dry-beyond-85304.herokuapp.com/api/publicaciones/${id}`
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
      .then((json) => setPost(json));
  }, [id]);

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
        <Text>{post.created_at}</Text>
        <Tag ml={5}>Categoria</Tag>
      </Flex>
      <Heading textAlign='justify'>{post.title}</Heading>
      <Text height='30%'>{post.content}</Text>
    </>
  );
};

export default CompletePost;
