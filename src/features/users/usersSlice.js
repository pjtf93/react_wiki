import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(
    'https://dry-beyond-85304.herokuapp.com/api/usuarios'
  );
  return response.data.data;
});
export const addNewUser = createAsyncThunk('users/addNewUser', async (data) => {
  const response = await axios.post(
    'https://dry-beyond-85304.herokuapp.com/api/usuarios',
    data
  );

  console.log(response.data[0]);
  console.log(response.data.message);
  return response.data[0];
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      state.users = state.users.concat(action.payload);
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export default usersSlice.reducer;
