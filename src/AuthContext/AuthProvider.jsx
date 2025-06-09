import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import axios from "axios";

 const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const providerGoogle = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider();
  const provideGithub = new GithubAuthProvider();

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

  const googleLogin = () => {
    return signInWithPopup(auth, providerGoogle);
  };

  const facebookLogin = () => {
    return signInWithPopup(auth, providerFacebook);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, provideGithub);
  };

  const userInfoUpdate = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  useEffect(() => {
    const unSubs = onAuthStateChanged(auth, (currentUSer) => {
      setUser(currentUSer);
      setLoading(false);
      if (currentUSer) {
        loadUserData(currentUSer);
      }
    });
    return () => unSubs();
  }, []);

  const loadUserData = (currentUSer) => {
    axios(`http://localhost:3000/user/${currentUSer.uid}`).then((res) => {
      const role = res.data.role;
      const enrolledCourses = res.data.enrolledCourseIds;
      setUser((prevUSer) => ({ ...prevUSer, role, enrolledCourses }));
    });
  };

  const contextData = {
    name: "Shaharear",
    createUser,
    loginUSer,
    googleLogin,
    facebookLogin,
    githubLogin,
    userInfoUpdate,
    logOut,
    setUser,
    user,
    loading,
  };

  return <AuthContext value={contextData}>{children}</AuthContext>;
};

export default AuthProvider;
