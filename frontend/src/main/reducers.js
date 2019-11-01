import { CombineReducers, combineReducers } from "redux";

const rootReducer = combineReducers({
  deshboard: () => ({ summary: { credit: 100, debt: 50 } })
});
export default rootReducer;
