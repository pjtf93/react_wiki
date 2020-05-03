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

  console.log(initialState.comments);

  /*  const list = initialState.comments.map
  const  */

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
          {initialState.comments.map((item) => (
            <>
              <Heading size='sm' my={2}>
                {item.id}
              </Heading>

              <Text my={2}>Fecha del comentario</Text>

              <Text my={2}>Comentario</Text>
            </>
          ))}
        </Box>
      </Stack>
    </>
  );
};

export default Comments;
