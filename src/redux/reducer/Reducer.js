import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  SET_SEARCH_RESULTS,
  SET_SEARCH_TERM,
} from "../constants/Constans";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  searchTerm: "",
  searchResults: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};
export default Reducer;
