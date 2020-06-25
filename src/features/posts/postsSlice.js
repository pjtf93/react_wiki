import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch Thunk with createAsyncThunk
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get(
    'https://dry-beyond-85304.herokuapp.com/api/publicaciones'
  );
  return response.data.data;
});

export const addNewPost = createAsyncThunk('posts/addNewPost', async (data) => {
  const response = await axios.post(
    'https://dry-beyond-85304.herokuapp.com/api/publicaciones',
    data
  );

  console.log(response.data[0]);
  console.log(response.data.message);
  return response.data[0];
});

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ postId, title, content, category_id }) => {
    const response = await axios.put(
      `https://dry-beyond-85304.herokuapp.com/api/publicaciones/${postId}`,
      { title, content, category_id }
    );
    console.log(response);

    return response;
  }
);

export const addNewComment = createAsyncThunk(
  'posts/addNewComment',
  async (data) => {
    const response = await axios.post(
      'https://dry-beyond-85304.herokuapp.com/api/comentarios',
      data
    );

    return response.data;
  }
);

export const deletePost = createAsyncThunk('posts/deletePost', async (item) => {
  const response = await axios.delete(
    `https://dry-beyond-85304.herokuapp.com/api/publicaciones/${item}`
  );
  return response;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.posts = state.posts.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    [addNewPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
    [updatePost.fulfilled]: (state, action) => {
      const existingPost = state.posts.find(
        (post) => post.id === action.payload.data.id
      );
      if (existingPost) {
        existingPost.title = action.payload.data.title;
        existingPost.content = action.payload.data.content;
      }
      console.log('Post actualizado');
    },
    [deletePost.fulfilled]: (state, action) => {
      state.posts = state.posts.filter((post) => action.meta.arg !== post.id);
    },
    [addNewComment.fulfilled]: (state, action) => {
      const existingPost = state.posts.find(
        (post) => post.id == action.meta.arg.post_id
      );
      if (existingPost) {
        existingPost.comments.push(action.payload[0]);
        console.log('comentario guardado ');
      } else {
        console.log('no se pudo guardar');
      }
    },
  },
});

export default postsSlice.reducer;

export const { postAdded, postUpdated } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id == postId);
