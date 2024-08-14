import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authReducer.js";

const Navbar = () => {
    const isLogin = useSelector(state => state.auth.isLogin);
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(authActions.isLogout());
    };

    return (
        <nav className="flex justify-between mt-3 bg-sky-400 text-white font-black p-2 mx-3 rounded">
            <h1>ReduxCounter</h1>
            {isLogin && (<ul className="flex gap-3">
                <li>Profile</li>
                <li className="bg-white text-sky-400 active:scale-95 rounded px-2">
                    <button onClick={logoutHandler}>Logout</button>
                </li>
            </ul>)}
            
        </nav>
    );
};

export default Navbar;
