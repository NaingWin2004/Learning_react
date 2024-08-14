import { legacy_createStore as createStore } from "redux";
const initialState = { count: 0, isShow: true };
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                count: state.count + 1,
                isShow: state.isShow
            };
        case "DECREASE":
            return {
                count: state.count - 1,
                isShow: state.isShow
            };
        case "INCREASE5":
            return {
                count: state.count + action.amount,
                isShow: state.isShow
            };
        case "TOGGLE":
            return {
                count: state.count,
                isShow: !state.isShow
            };
        default:
            return state;
    }
};

const store = createStore(counterReducer);

export default store;
