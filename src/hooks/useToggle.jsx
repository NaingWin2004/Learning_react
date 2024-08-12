import { useState } from "react";
const useToggle = (initialState = false) => {
    const [state, setToggle] = useState(initialState);

    const toggle = () => {
        setToggle(pre => !pre);
    };

    return [state, toggle];
};

export default useToggle;
