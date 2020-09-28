import {
  TOGGLE_DISPLAY_MODAL,
  TOGGLE_JOIN_CODE_MODAL,
  CAPTURE_JOIN_CODE,
  DISPLAY_OWNED_TOPIC,
} from '../actions/displayModalAction';

const initialState = {
  displayModal: false,
  displayJoinCodeModal: false,
  joinCode: null,
  displayOwnedTopic: false,
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
    case CAPTURE_JOIN_CODE:
      return {
        ...state,
        joinCode: action.payload,
      };
    case DISPLAY_OWNED_TOPIC:
      return {
        ...state,
        displayOwnedTopic: !state.displayOwnedTopic,
      };
    default:
      return state;
  }
};

export default newTopicReducer;
