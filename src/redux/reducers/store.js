import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookReducer } from "./bookReducers";

export const store = createStore(bookReducer, composeWithDevTools())