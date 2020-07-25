// THIS IS THE ROOT REDUCER
import { combineReducers } from "redux";
import KittenReducer from "./feed/reducer";

const reducer = combineReducers({
    kittens: KittenReducer
    // etc.
});

export default reducer;