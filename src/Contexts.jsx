import React, { createContext } from "react";

export const Contexts = createContext();

const ContextsProvider = props => {
    const info = {
      name : "NaingWin",
      live : "MongYawng"
    }
    return (
        <Contexts.Provider value={{ info }}>
            {props.children}
        </Contexts.Provider>
    );
};

export default ContextsProvider;
