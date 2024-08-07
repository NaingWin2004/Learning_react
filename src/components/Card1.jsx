import React, { useContext } from "react";
import { Contexts } from "../Contexts.jsx";
const Card1 = () => {
    const { info } = useContext(Contexts);
    return <div>Card 1 - {info.live}</div>;
};

export default Card1;
