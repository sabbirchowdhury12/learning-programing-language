import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    //sign in with Google
    const signWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    };

    //crate user by email and password
    const createUserWithEmail = (email, password) => {
        // setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //upadte user profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };


    //login with email
    const loginWithEmail = (email, password) => {
        // setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //log out
    const logOut = () => {
        // setLoading(true);
        return signOut(auth);
    };

    // set user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // if (currentUser === null || currentUser.emailVerified) {
            //     setuser(currentUser);
            // }
            // setLoading(false);
        });

        return () => unsubscribe();
    }, []);


    const authInfo = {
        createUserWithEmail,
        updateUserProfile,
        loginWithEmail,
        signWithGoogle,
        user,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;