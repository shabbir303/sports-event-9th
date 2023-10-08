/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const Authcontext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const login =(email, password) =>{
        setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }

    const UserSignOut = ()=>{
        setLoading(true);
      return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            console.log('checking user');
           setUser(currentUser);
           setLoading(false);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo = {
       user,
       createUser,
       loading,
       UserSignOut,
       login
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;