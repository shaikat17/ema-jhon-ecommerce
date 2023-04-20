import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./firebase/firebase.init";

const AppContext = createContext();

const auth = getAuth(app)

const AppProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    return <AppContext.Provider value={{createUser}}>{children}</AppContext.Provider>
};


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }