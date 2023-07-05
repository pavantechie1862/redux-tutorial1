import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { laptopReducer } from "./Reducers/laptopReducer";
import { mobileReducer } from "./Reducers/mobileReducer";
import userReducer from "./Reducers/userReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  laptops: laptopReducer,
  mobiles: mobileReducer,
  users: userReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => {
  console.log(store);
});
