import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { post } from "../api/peticiones";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error("Error: No hay proveedor de autenticación");
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signup = async (email, password, displayName, photoURL) => {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCredential.user;
        await updateProfile(user, { displayName, photoURL });
        setUser(user);
    };

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => signOut(auth);

    const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

    const getInfoUser = async (userSession) => {
        const userData = {
            uid: userSession.uid,
            email: userSession.email,
            displayName: userSession.displayName,
            photoURL: userSession.photoURL,
        };
        console.log(userData);
        return userData;
    };

    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, async (currenUser) => {
            setUser(currenUser);
            setLoading(false);
            if (currenUser) {
                console.log('Usuario que inició sesión:', currenUser);

                async function insertarUsuario() {
                    try {
                        const response = await post('/user/newUser', {
                            uid: currenUser.uid,
                            photoURL: currenUser.photoURL,
                            phoneNumber: currenUser.phoneNumber,
                            email: currenUser.email,
                            displayName: currenUser.displayName,
                        });

                        console.log('Respuesta del servidor:', response);
                    } catch (error) {
                        console.error('Error al insertar el usuario:', error);
                    }
                }

                const token = await currenUser.getIdToken();
                if (!localStorage.getItem('token')) {
                    localStorage.setItem("token", token);
                    insertarUsuario();
                }
                if (navigator.serviceWorker.controller) {
                    // mandamos el token al SW
                    navigator.serviceWorker.controller.postMessage({ data: token });
                }
            } else {
                localStorage.removeItem("token");
            }
        });
        return () => unsubuscribe();
    }, []);

    return (
        <authContext.Provider
            value={{
                signup,
                login,
                user,
                logout,
                loading,
                loginWithGoogle,
                resetPassword,
                getInfoUser,
            }}
        >
            {children}
        </authContext.Provider>
    );
}