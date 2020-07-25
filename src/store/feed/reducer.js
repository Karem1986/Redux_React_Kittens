const initialState = []
// console.log("hi feed reducer")---It works!

export default function kittenSliceReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_KITTENS": {
            return [ //is an [] is to map over them! i can only map over []
                ...state,
                ...action.payload
            ]
        }

        default: {
            return state;
        }
    }
}