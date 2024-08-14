import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
    const dispath = useDispatch();
    const counter = useSelector(state => state.count);
    const isShow = useSelector(state => state.isShow);

    const increaseHandler = () => {
        dispath({ type: "INCREASE" });
    };
    const decreaseHandler = () => {
        dispath({ type: "DECREASE" });
    };
    const increase5Handler = () => {
        dispath({ type: "INCREASE5", amount: 5 });
    };
    const toggleHandler = () => {
        dispath({ type: "TOGGLE" });
    };
    return (
        <div className="text-center mt-3 bg-sky-400 text-white font-black grid gap-3 p-2 mx-3 rounded">
            <h1>Redux Counter</h1>
            {isShow &&  <p className="text-3xl">{counter}</p>}
           
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
