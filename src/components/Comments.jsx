import React from 'react';
import {
  Flex,
  Image,
  Heading,
  Text,
  Tag,
  Textarea,
  Box,
  Stack,
  Button,
} from '@chakra-ui/core';

const Comments = () => {
  return (
    <>
      <Flex as='form' flexDirection='column'>
        <Textarea placeholder='Place your comment here' />
        <Button type='submit' variant='link'>
          Enviar
        </Button>
      </Flex>
      <Stack spacing={6}>
        <Box>
          <Heading size='sm'>Nombre del que comenta</Heading>
          <Text>Fecha del comentario</Text>
          <Text>Comentario</Text>
        </Box>
      </Stack>
    </>
  );
};

export default Comments;
