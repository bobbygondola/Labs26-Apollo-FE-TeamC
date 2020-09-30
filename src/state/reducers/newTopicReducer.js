import {
  TOGGLE_DISPLAY_MODAL,
  TOGGLE_JOIN_CODE_MODAL,
  CAPTURE_JOIN_CODE,
  DISPLAY_OWNED_TOPIC,
  SET_TOPICS_LIST,
  CAPTURE_CURRENT_USER,
  TOGGLE_JOIN_SURVEY_MODAL,
} from '../actions/displayModalAction';

const initialState = {
  displayModal: false,
  displayJoinCodeModal: false,
  displayJoinSurveyModal: false,
  joinCode: null,
  currentTopicId: null,
  topicsList: [],
  currentUser: null,
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
        currentTopicId: action.payload,
      };
    case SET_TOPICS_LIST:
      return {
        ...state,
        topicsList: action.payload,
      };
    case CAPTURE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case TOGGLE_JOIN_SURVEY_MODAL:
      return {
        ...state,
        displayJoinSurveyModal: !state.displayJoinSurveyModal,
      };
    default:
      return state;
  }
};

export default newTopicReducer;
