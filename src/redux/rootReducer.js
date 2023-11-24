import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
