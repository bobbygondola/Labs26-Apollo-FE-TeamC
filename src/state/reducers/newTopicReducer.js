import {
  TOGGLE_DISPLAY_MODAL,
  TOGGLE_JOIN_CODE_MODAL,
} from '../actions/displayModalAction';

const initialState = {
  displayModal: false,
  displayJoinCodeModal: false,
};
const newTopicReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DISPLAY_MODAL:
      return {
        ...state,
        displayModal: !state.displayModal,
      };
    case TOGGLE_JOIN_CODE_MODAL:
      return {
        ...state,
        displayJoinCodeModal: !state.displayJoinCodeModal,
      };
    default:
      return state;
  }
};

export default newTopicReducer;
