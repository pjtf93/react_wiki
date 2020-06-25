/* import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: 'LOADING_USERS',
  });
  try {
    const users = await axios.get(
      'https://dry-beyond-85304.herokuapp.com/api/usuarios'
    );
    dispatch({
      type: 'GET_USERS',
      payload: users.data.data,
    });
  } catch (error) {
    console.log('Error: ', error.message);
    dispatch({
      type: 'ERROR_USERS',
      payload: error.message,
    });
  }
};
 */
