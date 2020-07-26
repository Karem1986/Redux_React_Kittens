import axios from "axios";

export function signUp(email, password, name) {
    return function (dispatch, getState) {
        console.log("Inside Thunk", email, password, name)
    }
}