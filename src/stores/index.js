import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/userReducer";

const reducer = combineReducers({
	user,
});

const store = configureStore({ reducer });

export default store;
