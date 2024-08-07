import React from "react";
import Card1 from "./components/Card1.jsx";
import Card2 from "./components/Card2.jsx";
import Card3 from "./components/Card3.jsx";
import ContextsProvider from "./Contexts.jsx";

function App() {
    return (
        <ContextsProvider>
            <h1>App Component</h1>
            <Card1 />
            <Card2 />
            <Card3 />
        </ContextsProvider>
    );
}

export default App;
