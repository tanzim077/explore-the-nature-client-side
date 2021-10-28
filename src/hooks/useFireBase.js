import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializedApp from "../firebase/initializedApp";

initializedApp();

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    const emailHandle = e => {
        setEmail(e.target.value);
    }
    const passwordHandle = p => {
        setPassword(p.target.value);
    }

    const nameHandle = n => {
        setDisplayName(n.target.value);
    }

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("password should be at least 6 characters");
            return false;
        }
        setError('')
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((userCredential) => {
                const user = userCredential.user;
                user.displayName = displayName;
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, provider);
    }

    const signinUsingGithub = () => {
        const provider = new GithubAuthProvider();
        const auth = getAuth();
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });
    }

    return { displayName, handleGoogleSignIn, signinUsingGithub, handleSignUp, emailHandle, passwordHandle, nameHandle, handleLogin, logOut, user, error, setError };
};

export default useFireBase;