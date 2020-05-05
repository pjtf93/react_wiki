import React, { Fragment, useState } from 'react';
import useFetch from '../hooks/useFetch';
import {
  Flex,
  Heading,
  Text,
  Textarea,
  Box,
  Stack,
  Button,
} from '@chakra-ui/core';

const Comments = ({ id }) => {
  const API = `https://dry-beyond-85304.herokuapp.com/api/publicaciones/${id}`;
  const API2 = `https://dry-beyond-85304.herokuapp.com/api/comentarios`;
  const initialState = useFetch(API);
  const [content, setContent] = useState('');
  const [user_id, setUser] = useState('1');

  const handleSubmit = (event) => {
    event.preventDefault();
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    let body = {
      content: content,
      post_id: id,
      user_id: user_id,
    };

    fetch(API2, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log(JSON.stringify(body));
  };

  return (
    <>
      <Flex as='form' flexDirection='column' my={5} onSubmit={handleSubmit}>
        <Textarea
          placeholder='Place your comment here'
          type='text'
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <Button type='submit' variant='link' my={2}>
          Enviar
        </Button>
      </Flex>
      <Stack spacing={6} my={5}>
        <Box>
          <Heading size='lg' my={2}>
            Comments
          </Heading>
          {initialState.comments &&
            initialState.comments.map((item) => (
              <Fragment key={item.id}>
                <Heading size='sm' my={2}>
                  {item.id}
                </Heading>

                <Text my={2}>{item.created_at}</Text>

                <Text my={2}>{item.content}</Text>
              </Fragment>
            ))}
        </Box>
      </Stack>
    </>
  );
};

export default Comments;
