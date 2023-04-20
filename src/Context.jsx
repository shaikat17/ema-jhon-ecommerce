import { createContext, useContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "./firebase/firebase.init";

const AppContext = createContext();

const auth = getAuth(app)

const AppProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    return <AppContext.Provider value={{createUser, signIn}}>{children}</AppContext.Provider>
};


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }