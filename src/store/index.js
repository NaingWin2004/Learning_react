import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0, isShow: true },
    reducers: {
        increase(state) {
            state.count++;
        },
        decrease(state) {
            state.count--;
        },
        increase5(state,action) {
          state.count = state.count + action.payload
        },
        toggle(state) {
            state.isShow = !state.isShow;
        }
    }
});

export const counterActions = counterSlice.actions;
const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;
