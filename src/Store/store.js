import {applyMiddleware, combineReducers, createStore} from "redux";
import {homeReducer} from "./reducers/homeReducer.ts";
import {utilReducer} from "./reducers/utilReducer.ts";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
    home: homeReducer,
    utils: utilReducer
})

const store = createStore(reducers, applyMiddleware(thunk), composeWithDevTools())

export default store;