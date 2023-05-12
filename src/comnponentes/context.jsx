import { createContext, useState } from "react";
//import { firebase } from "./firebase";
//import { getAuth } from './firebase/Auth'

export const Context = createContext();

export default function ConetextProvider({ children }) {

    //const auth = getAuth(firebase);

    const [isLogged, setIsLogged] = useState(false);

    return (
        <Context.Provider value={{ isLogged, setIsLogged }}>
            {children}
        </Context.Provider>
    );
}