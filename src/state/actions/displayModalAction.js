export const TOGGLE_DISPLAY_MODAL = `TOGGLE_DISPLAY_MODAL`;
export const TOGGLE_JOIN_CODE_MODAL = `TOGGLE_JOIN_CODE_MODAL`;

export const toggleDisplayModal = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_DISPLAY_MODAL });
  };
};

export const toggleJoinCodeModal = () => {
  return dispatch => {
    dispatch({ type: TOGGLE_JOIN_CODE_MODAL });
  };
};
