import React, { useState, useEffect, createContext, useContext } from "react";
import firebase, { auth } from "../config/firebaseConfig";

type IProps = {
  children: React.ReactNode;
};

export interface IContext {
  user: firebase.User | null;
  signIn: (email: string, password: string) => Promise<void>;
}

const defaultValue: IContext = {
  user: null,
  signIn: async () => {},
};

const authContext = createContext<IContext>(defaultValue);

export const useAuth = () => {
  return useContext(authContext);
};

const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const signIn = async (email: string, password: string): Promise<void> => {
    if (email && password) {
      await auth.signInWithEmailAndPassword(email, password);
    }
    return;
  };

  useEffect(() => {
    console.log("HERE IN AUTH CONTEXT");
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value: IContext = {
    user,
    signIn,
  };

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
};

export default AuthProvider;
