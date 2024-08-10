import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Backdrop from "./Backdrop.jsx";

import { useState } from "react";
const Main = () => {
    const [showCart, setShowCart] = useState(false);
    const showCartHandler = () => {
        setShowCart(true);
    };
    const hideCartHandler = () => {
        setShowCart(false);
    };
    return (
        <main className="relative">
            <Header showCartHandler={showCartHandler} />
            <Body />
            <Backdrop showCart={showCart} hideCartHandler={hideCartHandler} />
        </main>
    );
};

export default Main;
