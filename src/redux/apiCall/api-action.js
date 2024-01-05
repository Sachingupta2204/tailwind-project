import axios from "axios";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_DATA_REQUEST" });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch({ type: "FETCH_DATA_SUCCESS", payload: response.data });
    } catch (error) {
      dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };
};
