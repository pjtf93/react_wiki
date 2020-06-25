import React, { Fragment, useState } from 'react';
import {
  Flex,
  Heading,
  Text,
  Textarea,
  Box,
  Stack,
  Button,
  Spinner,
} from '@chakra-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { addNewComment } from '../features/posts/postsSlice';

const PostComments = ({ postId }) => {
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id == postId)
  );

  const [content, setContent] = useState('');
  const [user_id, setUser] = useState('1');

  const dispatch = useDispatch();

  const onContentChanged = (e) => setContent(e.target.value);

  const handleSubmit = async () => {
    try {
      const resultComment = await dispatch(
        addNewComment({
          content,
          user_id,
          post_id: postId,
        })
      );
      unwrapResult(resultComment);
      setContent('');
    } catch (err) {
      console.error('Failed to save the post: ', err);
    }
  };
  return (
    <>
      <Flex as='form' flexDirection='column' my={5}>
        <Textarea
          placeholder='Place your comment here'
          type='text'
          value={content}
          onChange={onContentChanged}
        />

        <Button type='button' variant='link' my={2} onClick={handleSubmit}>
          Enviar
        </Button>
      </Flex>
      <Stack spacing={6} my={5}>
        <Box>
          <Heading size='lg' my={2}>
            Comments
          </Heading>
          {!post ? (
            <>
              <Spinner size='xl' />
            </>
          ) : (
            post.comments &&
            post.comments.map((item) => (
              <Fragment key={item.id}>
                <Heading size='sm' my={2}>
                  {item.id}
                </Heading>
                <Text my={2}>{item.created_at}</Text>
                <Text my={2}>{item.content}</Text>
              </Fragment>
            ))
          )}
        </Box>
      </Stack>
    </>
  );
};

export default PostComments;
