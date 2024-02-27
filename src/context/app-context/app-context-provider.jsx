import React from "react";
import { appReducer } from "./reducer";

export const Appcontext = React.createContext();


const initialState = {
    users: [],
}


export const AppContextProvider = ({ children }) => {
    const [data, dispatch] = React.useReducer(appReducer, initialState);
    return (
            <Appcontext.Provider value={{ data, dispatch }}>
                {children}
            </Appcontext.Provider>
    )
};