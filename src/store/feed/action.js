import axios from "axios";

const API_URL = `https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc`


export async function getKittens(dispatch, getState) {
    try {
        const images = await axios.get(API_URL)
        console.log('testing thunk', images)
        //to save the data inside the redux store
        const action = saveKittens(images.data)
        dispatch(action)

    }

    catch (e) {
        console.log(e)
    }
}
//2action to send this information to the redux store 

export const saveKittens = (data) => ({ //add it above to dispatch the action line 12
    type: "FETCH_KITTENS", //Add it to reducer AS a Case
    payload: data
})