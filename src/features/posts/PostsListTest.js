import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllPosts, fetchPosts } from './postsSlice';

import AddPostForm from './AddPostForm';

export const PostsListTest = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  /*   const renderedPosts = posts.map((post) => (
    <article className='post-excerpt'>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  )); */

  console.log(posts);

  return (
    <>
      {postStatus === 'loading' ? (
        <>
          <div className='loader'>Loading...</div>
        </>
      ) : (
        posts.map((post) => (
          <>
            <h2>Posts</h2>
            {post.title}
            {post.content.substring(0, 100)}
          </>
        ))
      )}

      <>
        <AddPostForm />
      </>
    </>
  );
};

export default PostsListTest;
