import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";
initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => { console.log(result) })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, []);

    const logOut = () => {
        signOut({})
            .then(() => {
            })

    }




    return {
        user,
        singInWithGoogle,
        logOut
    }
}

export default useFirebase;