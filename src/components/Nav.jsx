import { useContext } from "react";
import { ItemContext } from "../store/ItemContext.jsx";
const Nav = ({ showCartHandler }) => {
    const { items } = useContext(ItemContext);
    const totalCart = items.reduce((total, item) => total + item.amount, 0);
    return (
        <nav className="flex justify-between mx-5 py-3 font-bold select-none items-center">
            <h2 className="text-xl">NaingWin's Store</h2>
            <button
                className="bg-sky-400 px-3 py-1.5 rounded hover:bg-sky-200 shadow text-white hover:text-sky-400"
                onClick={showCartHandler}
            >
                Cart {totalCart}
            </button>
        </nav>
    );
};

export default Nav;
