import { combineReducers, createStore } from "redux";
import categoriesReducer from './categoriesReducer'

let reducers = combineReducers({
    categories: categoriesReducer
});

let store = createStore(reducers);
export default store;