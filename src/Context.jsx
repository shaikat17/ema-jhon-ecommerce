import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "./firebase/firebase.init";

const AppContext = createContext();

const auth = getAuth(app)

const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    // observer user auth state 
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        // stop observing while unmounting 
        return () =>{
            return unsubscribe();
        }
    }, [])

    const nInformation = {
        createUser,
        signIn,
        user,
        setUser,
        logOut
    }

    return <AppContext.Provider value={nInformation}>{children}</AppContext.Provider>
};


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }