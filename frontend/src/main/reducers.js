import { combineReducers } from "redux";

import DashboardReducer from "../dashboard/dashboardReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer //() => ({ summary: { credit: 100, debt: 50 } })
});
export default rootReducer;
