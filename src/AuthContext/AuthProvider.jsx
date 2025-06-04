import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUSer = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUSer) => {
      setUser(currentUSer);
      loadUserData(currentUSer);
    });
    return () => unSubs();
  }, []);

  const loadUserData = (currentUSer) => {
    if (currentUSer.providerData[0].providerId === "password") {
      axios(`http://localhost:3000/user/${currentUSer.uid}`).then((res) => {
        setUser((prevUSer) => ({ ...prevUSer, ...res.data }));
        setLoading(false);
      });
    }
  };

  const contextData = {
    name: "Shaharear",
    createUser,
    loginUSer,
    logOut,
    setUser,
    user,
  };

  return <AuthContext value={contextData}>{children}</AuthContext>;
};

export default AuthProvider;
