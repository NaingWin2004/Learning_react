import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer.js";
import authReducer from "./authReducer.js";

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;
