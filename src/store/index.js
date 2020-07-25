// this is the store to import function from redux 
import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootreducer from "./rootreducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

const store = createStore(rootreducer, enhancer);

export default store;