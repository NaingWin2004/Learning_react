import Main from "./layouts/Main.jsx";
import ItemContextProvider from "./store/ItemContext";
function App() {
    return (
        <ItemContextProvider>
            <Main />
        </ItemContextProvider>
    );
}

export default App;
