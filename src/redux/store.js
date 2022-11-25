import { combineReducers, createStore } from "redux";
import categoriesReducer from './categoriesReducer'
import currenciesReducer from "./currenciesReducer";
import itemsReducer from "./itemsReducer";

let reducers = combineReducers({
    categories: categoriesReducer,
    currencies: currenciesReducer,
    items: itemsReducer
});

let store = createStore(reducers);
export default store;