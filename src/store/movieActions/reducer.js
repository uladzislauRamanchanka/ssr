import * as actions from "./actionTypes";
export const initialState = {
  isLoading: false,
  isLoaded: false,
  error: "",
  data: [],
  amount: "",
  searchParams: {
    sortType: "release_date",
    sortOrder: "desc",
    activeGenre: "",
    searchString: "",
    limit: 18,
  },
  currentMovieDescription: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        amount: action.payload.totalAmount,
        data: action.payload.data,
        error: "",
      };
    case actions.FETCH_MOVIE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actions.MOVIE_UPDATE:
      return {
        ...state,
        data: state.data.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case actions.MOVIE_DELETE:
    case action.MOVIE_CREATE:
    case actions.MOVIE_DESCRIPTION:
      return {
        ...state,
        currentMovieDescription: action.payload,
      };
    case actions.MOVIE_GENRE:
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          activeGenre: action.payload !== "ALL" ? action.payload : "",
        },
      };
    case actions.MOVIE_SORT_BY:
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          sortType: action.payload,
        },
      };
    case actions.MOVIE_ASC_DESC:
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          sortOrder: action.payload ? "asc" : "desc",
        },
      };
    case actions.MOVIE_SEARCH_BY_TITLE:
      return {
        ...state,
        searchParams: {
          ...state.searchParams,
          searchString: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
