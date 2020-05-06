import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';

import {
  Flex,
  Heading,
  Button,
  Select,
  Editable,
  FormControl,
  EditableInput,
  EditablePreview,
} from '@chakra-ui/core';

const UpdatePost = ({ match }) => {
  const {
    params: { id },
  } = match;
  const API = `https://dry-beyond-85304.herokuapp.com/api/publicaciones/${id}`;
  const [{ data, isLoading }] = useFetch(API);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category_id, setCategory] = useState();
  const [user_id, setUser] = useState('1');

  const handleSubmit = (event) => {
    event.preventDefault();
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    let body = {
      title: setTitle,
      content: setContent,
      category_id: setCategory,
      user_id: setUser,
    };

    fetch(API, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ title, content, category_id, user_id }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log(body);
  };

  console.log(title);

  return (
    <Flex w='100%' direction='column' align='center' justify='flex-start'>
      <Heading as='h1' my={5}>
        Update your post
      </Heading>
      <FormControl
        as='form'
        h='100%'
        isRequired
        display='flex'
        flexDirection='column'
        justifyContent='space-around'
        p={6}
        onSubmit={handleSubmit}
      >
        <Flex direction='column' w='md' justify='flex-start' align='stretch'>
          <Heading size='md' mb={3} mt={3}>
            Titulo
          </Heading>
          <Editable
            isFullw
            placeholder='Titulo'
            type='text'
            startWithEditView='true'
          >
            <EditablePreview />

            <EditableInput
              defaultValue={data.title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Editable>
        </Flex>
        <Flex
          direction='column'
          w='md'
          h='xs'
          justify='flex-start'
          align='stretch'
        >
          <Heading size='md' mb={3} mt={3}>
            Contenido
          </Heading>
          <Editable
            resize='vertical'
            h='full'
            placeholder='Contenido'
            type='text'
            value={content}
            onChange={(event) => setContent(event.target.value)}
          >
            {data.content}
          </Editable>
        </Flex>
        <Flex direction='column' w='md' justify='flex-start' align='stretch'>
          <Heading size='md' mb={3} mt={3}>
            Categoria
          </Heading>
          <Select
            icon='chevron-down'
            placeholder='Select category'
            onChange={(e) => setCategory(e.currentTarget.value)}
          >
            {data.category && (
              <option value={category_id}>{data.category.id}</option>
            )}
          </Select>
        </Flex>
        <Button type='submit' my={5}>
          Enviar
        </Button>
      </FormControl>
    </Flex>
  );
};

export default UpdatePost;
