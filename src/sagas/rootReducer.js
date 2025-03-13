import { combineReducers } from "redux";
import hotelsReducer from "./hotelsSlice";

const rootReducer = combineReducers({
    hotels: hotelsReducer,
});

export default rootReducer;
