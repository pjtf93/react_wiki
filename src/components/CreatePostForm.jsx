import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';

import { addNewPost } from '../features/posts/postsSlice';
import {
  Flex,
  Heading,
  Button,
  Input,
  Select,
  Textarea,
  FormControl,
} from '@chakra-ui/core';

const CreatePostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategory] = useState();
  const [userId, setUserId] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const categories = useSelector((state) => state.categories.categories);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChaged = (e) => setUserId(e.target.value);
  const onCategoryChanged = (e) => setCategory(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        const resultAction = await dispatch(
          addNewPost({
            title,
            content,
            category_id: categoryId,
            user_id: userId,
          })
        );
        unwrapResult(resultAction);
        setTitle('');
        setContent('');
        setUserId('');
        setCategory('');
      } catch (err) {
        console.error('Failed to save the post: ', err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.first_name}
    </option>
  ));

  const categoryOptions = categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
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
            onChange={onTitleChanged}
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
            onChange={onContentChanged}
          />
        </Flex>
        <Flex direction='column' w='md' justify='flex-start' align='stretch'>
          <Heading size='md' mb={3} mt={3}>
            Usuario
          </Heading>
          <Select
            icon='chevron-down'
            placeholder='Select user'
            value={userId}
            onChange={onAuthorChaged}
          >
            {usersOptions}
          </Select>
        </Flex>
        <Flex direction='column' w='md' justify='flex-start' align='stretch'>
          <Heading size='md' mb={3} mt={3}>
            Categoria
          </Heading>
          <Select
            icon='chevron-down'
            placeholder='Select category'
            value={categoryId}
            onChange={onCategoryChanged}
          >
            {categoryOptions}
          </Select>
        </Flex>
        <Button
          type='button'
          my={5}
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Enviar
        </Button>
      </FormControl>
    </Flex>
  );
};

export default CreatePostForm;
