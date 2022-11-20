import { combineReducers, createStore } from "redux";
import categoriesReducer from './categoriesReducer'
import currenciesReducer from "./currenciesReducer";

let reducers = combineReducers({
    categories: categoriesReducer,
    currencies: currenciesReducer
});

let store = createStore(reducers);
export default store;