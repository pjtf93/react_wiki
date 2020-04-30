import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Textarea,
  Box,
  Stack,
  Button,
} from '@chakra-ui/core';

const Comments = () => {
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

          <Heading size='sm' my={2}>
            Nombre del que comenta
          </Heading>

          <Text my={2}>Fecha del comentario</Text>

          <Text my={2}>Comentario</Text>
        </Box>
      </Stack>
    </>
  );
};

export default Comments;
