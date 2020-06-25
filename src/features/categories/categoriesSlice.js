import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchCategoriesPosts = createAsyncThunk(
  'categories/fetchCategoriesPosts',
  async () => {
    const response = await axios.get(
      'https://dry-beyond-85304.herokuapp.com/api/categorias'
    );
    return response.data.data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCategoriesPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCategoriesPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.categories = state.categories.concat(action.payload);
    },
    [fetchCategoriesPosts.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export default categoriesSlice.reducer;
