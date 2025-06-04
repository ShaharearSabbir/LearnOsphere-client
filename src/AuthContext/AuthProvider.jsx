import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUSer) => {
      setUser(currentUSer);
      console.log(currentUSer);
    });

    return () => unSubs();
  }, []);
  const contextData = {
    name: "Shaharear",
    createUser,
    user,
  };

  return <AuthContext value={contextData}>{children}</AuthContext>;
};

export default AuthProvider;
