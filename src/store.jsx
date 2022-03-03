import { combineReducers, createStore } from "redux";
import todoReducer from "./Reducers/Reducer";

const store = createStore(combineReducers({
   todoReducer,
}));

export default store;