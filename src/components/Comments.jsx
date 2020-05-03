import React, { Fragment } from 'react';
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
  const initialState = useFetch(API);

  /*  const list = initialState.comments.map((item) => {
    return item.id;
  }); */
  console.log(initialState.comments);

  return (
    <>
      <Flex as='form' flexDirection='column' my={5}>
        <Textarea placeholder='Place your comment here' />
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
