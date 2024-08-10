import Cartitem from "../components/Cartitem.jsx";
import { useContext } from "react";
import { ItemContext } from "../store/ItemContext.jsx";

const Cart = ({ hideCartHandler }) => {
    const { items, total } = useContext(ItemContext);
    return (
        <>
            {items.length < 1 ? (
                <div className="flex flex-col gap-5">
                    <p className="text-center font-bold text-3xl">
                        No cart here!!!
                    </p>
                    <button
                        className="btn-close mx-auto"
                        onClick={hideCartHandler}
                    >
                        Close
                    </button>
                </div>
            ) : (
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map(fruit => (
                            <Cartitem key={fruit.id} fruit={fruit} />
                        ))}
                    </div>
                    <hr className="border-b-4 border-gray-900 rounded-2xl my-3" />
                    <div className="flex justify-between font-bold text-3xl mb-3">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-end gap-2 ">
                        <button className="btn-close" onClick={hideCartHandler}>
                            Close
                        </button>
                        <button
                            className="btn-order"
                            oniClick={() => {
                                alert("Order Compleated...");
                            }}
                        >
                            Order
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
