export const TOGGLE_DISPLAY_MODAL = `TOGGLE_DISPLAY_MODAL`;

export const toggleDisplayModal = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_DISPLAY_MODAL });
  };
};
