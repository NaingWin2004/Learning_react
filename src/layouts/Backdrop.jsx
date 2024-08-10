import Cart from "../components/Cart.jsx";

const Backdrop = ({ showCart, hideCartHandler }) => {
    return (
        <div>
            {showCart && (
                <div className="z-10 min-h-screen min-h-full absolute top-0 right-0 w-full backdrop-blur-md bg-transparent py-3">
                    <Cart hideCartHandler={hideCartHandler} />
                </div>
            )}
        </div>
    );
};

export default Backdrop;
