import React, { useState, useEffect } from 'react';
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
  const [{ data }] = useFetch(API);

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
    console.log(title, content, category_id, user_id);
  };

  useEffect(() => {
    setTitle(data.title);
    setContent(data.content);
  }, [data]);

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
          {title && (
            <Editable
              isFullw
              placeholder='Titulo'
              type='text'
              defaultValue={title}
            >
              <EditablePreview />
              <EditableInput
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Editable>
          )}
        </Flex>
        <Flex direction='column' w='md' justify='flex-start' align='stretch'>
          <Heading size='md' mb={3} mt={3}>
            Contenido
          </Heading>
          {content && (
            <Editable
              resize='vertical'
              h='full'
              placeholder='Contenido'
              defaultValue={content}
              type='text'
            >
              <EditablePreview />
              <EditableInput
                value={content}
                onChange={(event) => setContent(event.target.value)}
              />
            </Editable>
          )}
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
