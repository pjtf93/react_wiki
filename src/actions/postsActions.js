/* import axios from 'axios';

export const getAllPosts = () => async (dispatch) => {
  dispatch({
    type: 'LOADING_POSTS',
  });
  try {
    const posts = await axios.get(
      'https://dry-beyond-85304.herokuapp.com/api/publicaciones'
    );
    dispatch({
      type: 'GET_POSTS',
      payload: posts.data.data,
    });
  } catch (error) {
    console.log('Error: ', error.message);
    dispatch({
      type: 'ERROR_POSTS',
      payload: error.message,
    });
  }
};

export const getPostById = () => async (dispatch) => {
  const response = await axios.get(
    `https://dry-beyond-85304.herokuapp.com/api/publicaciones/`
  );
  dispatch({
    type: 'GET_POST_BY_ID',
    payload: response.data,
  });
}; */
