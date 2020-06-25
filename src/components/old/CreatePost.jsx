import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import useFetch from '../hooks/useFetch';
import {
  Flex,
  Heading,
  Button,
  Input,
  Select,
  Textarea,
  FormControl,
} from '@chakra-ui/core';

const CreatePost = () => {
  // const initialState = useFetch(API);
  const API2 = `https://dry-beyond-85304.herokuapp.com/api/publicaciones`;
  const API = 'https://dry-beyond-85304.herokuapp.com/api/categorias';
  const [initialState, setInitialState] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category_id, setCategory] = useState();
  const [user_id, setUser] = useState('1');

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(API);
      setInitialState(data.data);
    };

    fetchData();
  }, []);

  console.log(initialState.data);

  const handleSubmit = (event) => {
    event.preventDefault();
    let headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    /*     let body = {
      title: setTitle,
      content: setContent,
      category_id: setCategory,
      user_id: setUser,
    }; */

    fetch(API2, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ title, content, category_id, user_id }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log({ title, content, category_id, user_id });
  };

  const categoryOptions =
    initialState.data &&
    initialState.data.map((item) => (
      <option key={item.id} value={item.id}>
        {item.id}
      </option>
    ));

  return (
    <Flex w='100%' direction='column' align='center' justify='flex-start'>
      <Heading as='h1' my={5}>
        Create a new post
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
          <Input
            isFullw
            placeholder='Titulo'
            type='text'
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
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
          <Textarea
            resize='vertical'
            h='full'
            placeholder='Contenido'
            type='text'
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
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
            {categoryOptions}
          </Select>
        </Flex>
        <Button type='submit' my={5}>
          Enviar
        </Button>
      </FormControl>
    </Flex>
  );
};

export default CreatePost;
