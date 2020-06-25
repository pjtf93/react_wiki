import React, { useEffect } from 'react';
import { Flex, Heading, Image, Spinner } from '@chakra-ui/core';
import { Link as ReactLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { selectAllPosts, fetchPosts } from '../features/posts/postsSlice';

const PostsDisplay = ({ post }) => {
  return (
    <Flex
      direction='column'
      h='50%'
      w='50%'
      align='stretch'
      justify='space-around'
      shadow='md'
      my={10}
      key={post.id}
    >
      <Image src='https://picsum.photos/600/600?random' />

      <Heading
        as={ReactLink}
        to={{ pathname: `/post/${post.id}` }}
        size='xl'
        my={3}
        ml={3}
      >
        {post.title}
      </Heading>

      <Heading as='h4' size='sm' key={post.content} m={5}>
        {post.content.substring(0, 400)}
      </Heading>

      <Heading
        as={ReactLink}
        to={{ pathname: `/post/${post.id}` }}
        size='xs'
        textAlign='right'
        m={3}
      >
        Keep reading
      </Heading>
    </Flex>
  );
};

const CategoriesDisplay = ({ categorie }) => {
  return (
    <Flex
      direction='column'
      h='50%'
      w='50%'
      align='stretch'
      justify='space-around'
      shadow='md'
      my={10}
      key={categorie.id}
    >
      <Image src='https://picsum.photos/600/600?random' />

      <Heading
        as={ReactLink}
        to={{ pathname: `/post/${categorie.id}` }}
        size='xl'
        my={3}
        ml={3}
      >
        {categorie.title}
      </Heading>

      <Heading as='h4' size='sm' key={categorie.content} m={5}>
        {categorie.content.substring(0, 400)}
      </Heading>

      <Heading
        as={ReactLink}
        to={{ pathname: `/post/${categorie.id}` }}
        size='xs'
        textAlign='right'
        m={3}
      >
        Keep reading
      </Heading>
    </Flex>
  );
};

const PostsList = ({ categoriesId }) => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const categories = useSelector((state) =>
    state.categories.categories.find(
      (categorie) => categorie.id == categoriesId
    )
  );

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  return (
    <Flex
      w='100%'
      h='100%'
      justify='flex-start'
      align='center'
      direction='column'
    >
      <Flex align='flex-start' w='50%'>
        <Heading textAlign='left'>The Latest</Heading>
      </Flex>
      <Flex
        w='100%'
        h='100%'
        justify='flex-start'
        align='center'
        direction='column-reverse'
      >
        {postStatus === 'loading' ? (
          <>
            <Spinner size='xl' />
          </>
        ) : categories ? (
          categories.posts.map((categorie) => (
            <CategoriesDisplay key={categorie.id} categorie={categorie} />
          ))
        ) : postStatus === 'succeeded' ? (
          posts.map((post) => <PostsDisplay key={post.id} post={post} />)
        ) : (
          <>
            <h1>Error: {error} </h1>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default PostsList;
