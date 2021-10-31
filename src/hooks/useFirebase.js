import { useState } from "react";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import initializeAuthentication from "../Firebase/firebase.init";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
    };

    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false);
            })
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
        })
        return () => unsubscribed;
    }, []);

    const logout = () => {
        setLoading(false);
        signOut(auth)
            .then(() => {

            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return {
        user,
        error,
        loading,
        signInWithGoogle,
        signInWithGithub,
        logout
    }
};

export default useFirebase;