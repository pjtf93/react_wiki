import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostById } from './postsSlice';

const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) => selectPostById(state, postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </article>
    </section>
  );
};

export default SinglePostPage;
