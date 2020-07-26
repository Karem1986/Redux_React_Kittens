# As a kitten lover, I want to:
- see random kittens
- filter them by some meaningful distinction (for example "tag" or "category")--only the ones that have name 
- sort them by x

API: https://docs.thecatapi.com/api-reference/images/images-search

1. Setup React and Redux & Router 
video example: https://www.youtube.com/watch?v=DD2CnyfXYWY
code example: https://github.com/Reinoptland/coders-network-42/blob/master/plan.md 
Reader: https://reader.codaisseur.com/courses/redux/30-redux-3/01-setup/02-setup 

- CRA [x]
- Setup Redux:

    - Install dep [x]
    - Create a store at src/store/index.js [x]
    - A root reducer [x]
    - Products feed reducer [x]
    - Change index.js --> Provider [x]
    - TEST: log smth in the reducer, check in redux dev tools []

- Setup router
    - npm install react-router-dom[x]
    - Wrap our app in a Router [x]

2. Making the feed page: HomePage to display kittens 
   - Create Homepage (page to display kittens) [x]
   - Import Homepage inside App.js [x]
   - import { Switch, Route } from "react-router-dom" [x]
   - Create a Switch route inside app.js [x]

 - Local state
    - to fetch data: install axios, import useEffect) [x]
     - Set up useEffect with the API URL or database [x]
     - Create the const useState -> for kittens [x]
    - Display a random image kitten  (render) [x] 

3. Transfer state to redux 
     - setup [x]
     -  Create reducer for the state we are going to use (if it doesn't exist yet) [x]
     -create action to feed the data into the store --feed/actions.js [x]
     -create action to save the data into redux [x]
     -import the selector AND the action into homepage.js []
     -Display products:
     -create selector [x]
     -implement useSelector [x]
     
4. Search a cat by id [x]
5. When user clicks on a pic they can go to the image details 

6. User shoud be able to Sign up 
 - Route to sign up page 
 - Signup form 
 - Event handler--> onChange & onSubmit 
 - Dispatch an action (thunk--request to the backend)
     -- Kitten's pics to the API 
     --Email and password 
- Backend ---> already done with the API cats 

- Thunk (continued)

    - Response (ok) we get a JWT -> we need to stor it
     - dispatch action (synchronous action, type & payload)
     
- Reducer

 make a new reducer (if it does not exist)
import it in the rootreducer
 write a case
 store the token (update the state, we have a token)

Done!

7. Login 


8. Log out 


