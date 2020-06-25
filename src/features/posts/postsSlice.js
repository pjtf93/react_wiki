import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
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
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        };
      },
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
  },
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
  },
});

export default postsSlice.reducer;

export const { postAdded, postUpdated } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
  state.posts.posts.find((post) => post.id == postId);
