/* const setFavorite = (payload) => ({
  type: 'SET_FAVORITE',
  payload,
});

export default setFavorite;
 */

export const traerTodos = () => (dispatch) => {
  dispatch({
    type: 'traer_usuarios',
    payload: [1, 2, 3],
  });
};
