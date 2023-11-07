import {combineReducers} from "redux";
import {homeSlice} from "./reducers/homeReducer";
import {utilSlice} from "./reducers/utilReducer";
import {configureStore} from "@reduxjs/toolkit";

const reducers = combineReducers({
    home: homeSlice.reducer,
    utils: utilSlice.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: reducers

    })
}



export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof reducers>