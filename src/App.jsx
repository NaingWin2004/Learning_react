import { useReducer } from "react";

const first = (state, action) => {
    switch (action.type) {
        case "PLUS":
            return { ...state, count: state.count + 1 };
        case "MINUS":
          return {...state,count:state.count -1}
    }
};
function App() {
    const [state, dispatch] = useReducer(first, { key: "", count: 0 });
    return (
        <>
            <div className="flex my-5 justify-center items-center min-h-screen ">
                <button
                    className="btn"
                    onClick={() => {
                        dispatch({ type: "PLUS" });
                    }}
                >
                    +
                </button>
                <span className="font-bold text-3xl mx-1.5">{state.count}</span>
                <button className="btn" onClick={() => {
                        dispatch({ type: "MINUS" });
                    }}>-</button>
            </div>
        </>
    );
}

export default App;
