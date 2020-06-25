import React, { useState } from 'react';

import {
  Flex,
  Heading,
  Button,
  Select,
  Editable,
  FormControl,
  EditableInput,
  EditablePreview,
  Spinner,
} from '@chakra-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { selectPostById, updatePost } from '../features/posts/postsSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const UpdateUserPost = ({ match }) => {
  const { postId } = match.params;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  // const [category_id, setCategory] = useState();

  const dispatch = useDispatch();

  const post = useSelector((state) => selectPostById(state, postId));
  // const categories = useSelector((state) => state.categories.categories);
  const postStatus = useSelector((state) => state.posts.status);
  const categoriesStatus = useSelector((state) => state.categories.status);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  // const onCategoryChanged = (e) => setCategory(e.target.value);

  const handleSubmit = async () => {
    try {
      const updateAction = await dispatch(
        updatePost({
          title,
          content,
          category_id: post.category.id,
          postId,
        })
      );
      unwrapResult(updateAction);
      setTitle('');
      setContent('');
      // setCategory('');
    } catch (err) {
      console.error('Failed to save the post: ', err);
    }
  };

  /*  const categoryOptions = categories.map((category) => (
    <option key={category.id} value={category.id}>
      {category.name}
    </option>
  )); */

  return (
    <Flex w='100%' direction='column' align='center' justify='flex-start'>
      <Heading as='h1' my={5}>
        Update your post
      </Heading>
      {postStatus === 'loading' && categoriesStatus === 'loading' ? (
        <>
          <Spinner size='xl' />
        </>
      ) : postStatus === 'succeeded' && categoriesStatus === 'succeeded' ? (
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

            <Editable
              isFullw
              placeholder='Titulo'
              type='text'
              defaultValue={post.title}
            >
              <EditablePreview />
              <EditableInput value={title} onChange={onTitleChanged} />
            </Editable>
          </Flex>
          <Flex direction='column' w='md' justify='flex-start' align='stretch'>
            <Heading size='md' mb={3} mt={3}>
              Contenido
            </Heading>

            <Editable
              resize='vertical'
              h='full'
              placeholder='Contenido'
              defaultValue={post.content}
              type='text'
            >
              <EditablePreview />
              <EditableInput value={content} onChange={onContentChanged} />
            </Editable>
          </Flex>
          {/*         <Flex direction='column' w='md' justify='flex-start' align='stretch'>
            <Heading size='md' mb={3} mt={3}>
              Categoria
            </Heading>
            <Select
              icon='chevron-down'
              placeholder='Select category'
              defaultValue={post.category.name}
              onChange={onCategoryChanged}
            >
              {categoryOptions}
            </Select>
          </Flex> */}
          <Button type='button' my={5} onClick={handleSubmit}>
            Enviar
          </Button>
        </FormControl>
      ) : (
        <>
          <h1>Error </h1>
        </>
      )}
    </Flex>
  );
};

export default UpdateUserPost;
