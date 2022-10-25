import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.init'

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState()

    const googleProvider = new GoogleAuthProvider();


    //Create User Account
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login User Account
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Check currently logged in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('auth state Changed', currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    //google signup
    const googleSign = () => {
        return signInWithPopup(auth, googleProvider);
    }


    const authInfo = { user, createUser, loginUser, googleSign }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;