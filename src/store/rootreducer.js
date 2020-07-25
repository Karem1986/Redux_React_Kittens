// THIS IS THE ROOT REDUCER
import { combineReducers } from "redux";
import kittens from "./feed/reducer";

const reducer = combineReducers({
    kittens: kittens
    // etc.
});

export default reducer;