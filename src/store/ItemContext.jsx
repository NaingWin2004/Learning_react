import { createContext, useReducer } from "react";

const initialState = {
    items: [],
    total: 0
};

const itemRender = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const existItemIndex = state.items.findIndex(
            item => item.id === action.item.id // Fix: use action.item.id here
        );
        const existItem = state.items[existItemIndex];
        let updatedItems;

        if (existItem) {
            const updatedItem = {
                ...existItem,
                amount: existItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existItemIndex] = updatedItem; // Fix: correctly update the array with updated item
        } else {
            updatedItems = state.items.concat(action.item);
        }

        const updatedTotalAmount =
            state.total + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            total: updatedTotalAmount
        };
    }
    if (action.type === "REMOVE_ITEM") {
        const existItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        const existItem = state.items[existItemIndex];
        const updatedTotalAmount = state.total - existItem.price;

        let updatedItems;
        if (existItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existItem, amount: existItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
          total: updatedTotalAmount
        };
    }
    return state;
};

export const ItemContext = createContext({
    items: [],
    total: 0,
    addItem: item => {},
    removeItem: id => {}
});

const ItemContextProvider = props => {
    const [itemState, dispatchItem] = useReducer(itemRender, initialState);

    const addItemHandler = item => {
        dispatchItem({ type: "ADD_ITEM", item });
    };

    const removeItemHandler = id => {
        dispatchItem({ type: "REMOVE_ITEM", id });
    };

    const ItemCtx = {
        items: itemState.items,
        total: itemState.total,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <ItemContext.Provider value={ItemCtx}>
            {props.children}
        </ItemContext.Provider>
    );
};

export default ItemContextProvider;
