import { combineReducers } from "redux";
import dataReducer from "./apiCall/api-reducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
