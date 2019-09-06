import {
  REQUEST_LIST_FAIL,
  REQUEST_LIST_SUCCESS,
  REQUEST_FETCH_LIST
} from "./FetchList";

const FetchList = () => {
  const URL_GITHUB = "https://api.github.com/emojis";

  return async dispatch => {
    dispatch({
      type: REQUEST_FETCH_LIST
    });
    try {
      const request = await fetch(URL_GITHUB);
      const response = await request.json();

      dispatch({
        type: REQUEST_LIST_SUCCESS,
        payload: response
      });
    } catch (error) {
      dispatch({
        type: REQUEST_LIST_FAIL
      });
    }
  };
};

export default FetchList;
