import React from 'react';

import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';

import AddPostForm from './AddPostForm';

export const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article className='post-excerpt'>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <>
      <section>
        <h2>Posts</h2>
        {renderedPosts}
      </section>
      <>
        <AddPostForm />
      </>
    </>
  );
};
