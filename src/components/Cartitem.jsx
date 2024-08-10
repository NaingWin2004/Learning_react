import { useContext } from "react";
import { ItemContext } from "../store/ItemContext";

const Cartitem = ({ fruit }) => {
    const { addItem, removeItem } = useContext(ItemContext);
    const addAmountHandler = () => {
        addItem({ ...fruit, amount: 1 });
    };

    const removeAmountHandler = () => {
        removeItem(fruit.id);
    };
    return (
        <>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg drop-shadow-xl">
                <div className="px-4 py-2 relative">
                    <h1 className="text-xl font-bold text-gray-800 uppercase">
                        {fruit.name}
                    </h1>

                    <div className="flex justify-end ">
                        <p className="bg-gray-200 w-1/6 rounded absolute top-3 right-10 outline-none px-1.5 text-center font-bold">
                            x {fruit.amount}
                        </p>
                        <div className="flex px-4 gap-3 ">
                            <button
                                className="btn px-2"
                                onClick={addAmountHandler}
                            >
                                +
                            </button>
                            <button
                                className="btn px-2.5"
                                onClick={removeAmountHandler}
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between px-4 py-2 bg-gray-600">
                    <h1 className="text-lg font-bold text-white">
                        ${fruit.price}
                    </h1>
                    <button className="px-2 py-1.5 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded active:scale-95 focus:outline-none">
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cartitem;
