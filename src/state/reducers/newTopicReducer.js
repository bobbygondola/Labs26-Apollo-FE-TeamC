import { TOGGLE_DISPLAY_MODAL } from '../actions/displayModalAction';

const initialState = {
  displayModal: false,
};
const newTopicReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DISPLAY_MODAL:
      return {
        ...state,
        displayModal: !state.displayModal,
      };
    default:
      return state;
  }
};

export default newTopicReducer;
