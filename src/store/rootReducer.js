import { combineReducers } from "redux";
import reducer from "./movieActions/reducer";

const rootReducer = combineReducers({
  movie: reducer,
});

export default rootReducer;
