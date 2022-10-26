import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase/firebase.init'

export const AuthContext = createContext();

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    //Create User Account
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //Login User Account
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Check currently logged in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('auth state Changed', currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    //google signup
    const googleSign = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //github signup
    const githubSign = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    //logout
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = { user, createUser, loginUser, googleSign, githubSign, logoutUser, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default UserContext;