import {combineReducers, createStore} from "redux";
import {homeReducer} from "./reducers/homeReducer.js";
import {utilReducer} from "./reducers/utilReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = combineReducers({
    home: homeReducer,
    utils: utilReducer
})

const store = createStore(reducers, composeWithDevTools())

export default store;