import { useDispatch } from "react-redux";
import {authActions} from "../store/authReducer.js"
const Welcome = () => {
  const dispatch = useDispatch()
    const loginHandler = () => {
      dispatch(authActions.isLogin())
    };
    return (
        <div className="flex justify-center">
            <button
                className=" mt-3 bg-sky-400 text-white font-black p-2 mx-3 rounded active:scale-95"
                onClick={loginHandler}
            >
                Login to Redux Counter
            </button>
        </div>
    );
};

export default Welcome;
