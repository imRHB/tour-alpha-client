import { useState } from "react";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import initializeAuthentication from "../Firebase/firebase.init";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
            return () => unsubscribed;
        })
    }, []);

    const logout = () => {
        return signOut(auth);
        /* .then(() => {

        })
        .catch(error => {
            setError(error.message);
        }) */
    }

    return {
        user,
        signInWithGoogle,
        signInWithGithub,
        logout
    }
};

export default useFirebase;