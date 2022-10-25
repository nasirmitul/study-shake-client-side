import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init'

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState()

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


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

    //github signup
    const githubSign = () => {
        return signInWithPopup(auth, githubProvider);
    }

    //logout
    const logoutUser = () => {
        return signOut(auth);
    }


    const authInfo = { user, createUser, loginUser, googleSign, githubSign, logoutUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;