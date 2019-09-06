import {
  REQUEST_LIST_SUCCESS,
  REQUEST_LIST_FAIL,
  REQUEST_FETCH_LIST
} from "../actions/FetchList/FetchList";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false
};

export const FetchList = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_FETCH_LIST:
      return {
        ...state,
        error: false,
        loading: true
      };
    case REQUEST_LIST_SUCCESS:
      return {
        data: action.payload,
        error: false,
        loading: false
      };
    case REQUEST_LIST_FAIL:
      return {
        data: [],
        loading: false,
        error: true
      };
    default:
      return state;
  }
};
