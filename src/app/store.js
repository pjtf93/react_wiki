import { configureStore } from '@reduxjs/toolkit';

import postsReducer from '../features/posts/postsSlice';
import usersReducer from '../features/users/usersSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    categories: categoriesReducer,
  },
});
