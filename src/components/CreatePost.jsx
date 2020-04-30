import React from 'react';
import { Flex, Heading, Button, Input } from '@chakra-ui/core';

const CreatePost = () => {
  return (
    <Flex flexDirection='row' height='100%' justifyContent='space-around'>
      <Flex
        width='100%'
        flexDirection='column'
        alignItems='center'
        justifyContent='space-around'
      >
        <Flex
          flexDirection='column'
          width='40%'
          height='30%'
          justifyContent='flex-start'
          alignItems='stretch'
        >
          <Heading size='lg'>Titulo</Heading>
          <Input height={48} isFullWidth />
        </Flex>
        <Flex
          flexDirection='column'
          width='40%'
          height='30%'
          justifyContent='flex-start'
          alignItems='stretch'
        >
          <Heading size='lg'>Contenido</Heading>
          <Input height={48} isFullWidth />
        </Flex>
        <Flex
          flexDirection='column'
          width='40%'
          height='30%'
          justifyContent='flex-start'
          alignItems='stretch'
        >
          <Heading size='lg'>Categoria</Heading>
          <Input height={16} isFullWidth />
        </Flex>
        <Button>Enviar</Button>
      </Flex>
    </Flex>
  );
};

export default CreatePost;
