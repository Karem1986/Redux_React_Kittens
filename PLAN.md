# As a kitten lover, I want to:
-  see an overview of kitten pictures, 
- sort them by price, and 
- filter them by some meaningful distinction (for example "tag" or "category")

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
