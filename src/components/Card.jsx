import { useState, useContext } from "react";
import { ItemContext } from "../store/ItemContext.jsx";
const Card = ({ fruit }) => {
    const [currentAmount, setCurrentAmount] = useState(1);
    const currentAmountNum = Number(currentAmount);
    const { addItem } = useContext(ItemContext);
    const addtocart = () => {
      if(currentAmountNum < 1 || currentAmountNum > 5){
        alert("Please Enter in valid Number")
        
        return
      }
        addItem({
            id: fruit.id,
            name: fruit.name,
            price: fruit.price,
            amount: currentAmountNum
        });
    };
    return (
        <div className="max-w-xs overflow-hidden bg-white rounded-lg drop-shadow-xl">
            <div className="px-4 py-2 relative">
                <h1 className="text-xl font-bold text-gray-800 uppercase">
                    {fruit.name}
                </h1>
                <p className="mt-1 text-sm text-gray-600">{fruit.title}</p>
                <div className="flex justify-end ">
                    <input
                        type="number"
                        className="bg-gray-200 w-1/4 rounded absolute top-1/2 outline-none px-1.5"
                        min="1"
                        max="5"
                        onChange={e => {
                            setCurrentAmount(e.target.value);
                        }}
                        value={currentAmount}
                    />
                </div>
            </div>

            <div className="flex items-center justify-between px-4 py-2 bg-gray-600">
                <h1 className="text-lg font-bold text-white">${fruit.price}</h1>
                <button
                    className="px-2 py-1.5 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded active:scale-95 focus:outline-none"
                    onClick={addtocart}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Card;
