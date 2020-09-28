export const TOGGLE_DISPLAY_MODAL = `TOGGLE_DISPLAY_MODAL`;
export const TOGGLE_JOIN_CODE_MODAL = `TOGGLE_JOIN_CODE_MODAL`;
export const CAPTURE_JOIN_CODE = `CAPTURE_JOIN_CODE`;
export const DISPLAY_OWNED_TOPIC = `DISPLAY_OWNED_TOPIC`;

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

export const captureJoinCode = joinCode => {
  return dispatch => {
    dispatch({ type: CAPTURE_JOIN_CODE, payload: joinCode });
  };
};

export const toggleDisplayOwnedTopic = () => {
  return dispatch => {
    dispatch({ type: DISPLAY_OWNED_TOPIC });
  };
};
