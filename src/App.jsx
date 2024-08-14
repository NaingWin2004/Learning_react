import Counter from "./components/Counter.jsx";
import Navbar from "./components/Navbar.jsx";
import Welcome from "./components/Welcome.jsx";

import { useSelector } from "react-redux";

function App() {
    const isLogin = useSelector(state => state.auth.isLogin);
    return (
        <div>
            <Navbar />
            {!isLogin &&  <Welcome /> }
           
            {isLogin && <Counter />}
        </div>
    );
}

export default App;
