import React from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

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

    const authInfo = {
        createUserWithEmail,
        updateUserProfile,
        loginWithEmail,
        signWithGoogle
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;