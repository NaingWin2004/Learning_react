import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index.js";
const Counter = () => {
    const dispath = useDispatch();
    const counter = useSelector(state => state.count);
    const isShow = useSelector(state => state.isShow);

    const increaseHandler = () => {
        dispath(counterActions.increase());
    };
    const decreaseHandler = () => {
        dispath(counterActions.decrease());
    };
    const increase5Handler = () => {
        dispath(counterActions.increase5(5));
    };
    const toggleHandler = () => {
        dispath(counterActions.toggle());
    };
    return (
        <div className="text-center mt-3 bg-sky-400 text-white font-black grid gap-3 p-2 mx-3 rounded">
            <h1>Redux Counter</h1>
            {isShow && <p className="text-3xl">{counter}</p>}

            <div className="flex justify-center gap-2">
                <button
                    className="bg-white text-sky-300 px-2 py-1 rounded active:scale-90"
                    onClick={increaseHandler}
                >
                    increase
                </button>
                <button
                    className="bg-white text-sky-300 px-2 py-1 rounded active:scale-90"
                    onClick={increase5Handler}
                >
                    increase 5
                </button>
                <button
                    className="bg-white text-red-300 px-2 py-1 rounded active:scale-90"
                    onClick={decreaseHandler}
                >
                    decrease
                </button>
            </div>
            <button
                className="bg-white text-sky-300 px-2 py-1 rounded active:scale-95"
                onClick={toggleHandler}
            >
                ToggleCounter
            </button>
        </div>
    );
};

export default Counter;
