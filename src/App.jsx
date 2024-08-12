import useToggle from "./hooks/useToggle.jsx";
function App() {
    const [show, toggle] = useToggle(false);
    return (
        <div className="flex flex-col justify-center m-2">
            <buttom
                className="bg-gray-600 active:bg-gray-900 active:scale-95 text-white py-2 px-4 rounded mx-auto select-none"
                onClick={toggle}
            >
                {show ? "hide" : "show"}
            </buttom>
            {show && <p className="font-bold">Componet is rending...</p>}
        </div>
    );
}

export default App;
