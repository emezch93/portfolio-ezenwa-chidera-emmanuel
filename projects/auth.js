import { auth } from "./firebase-config.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


const googleProvider =
  new GoogleAuthProvider();


/* ======================================================
   SIGN UP
====================================================== */

export async function signUp(
  name,
  email,
  password
) {

  const credential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );


  await updateProfile(
    credential.user,
    {
      displayName: name.trim()
    }
  );


  return credential.user;

}


/* ======================================================
   LOGIN
====================================================== */

export async function logIn(
  email,
  password
) {

  const credential =
    await signInWithEmailAndPassword(
      auth,
      email,
      password
    );


  return credential.user;

}


/* ======================================================
   GOOGLE
====================================================== */

export async function signInWithGoogle() {

  await signInWithRedirect(
    auth,
    googleProvider
  );

}


/* ======================================================
   GOOGLE REDIRECT RESULT
====================================================== */

export async function checkGoogleRedirectResult() {

  try {

    const result =
      await getRedirectResult(auth);

    if (!result) {
      return null;
    }

    return result.user;

  } catch (error) {

    console.error(
      "Google redirect result error:",
      error.code,
      error.message
    );

    return null;

  }

}


/* ======================================================
   LOGOUT
====================================================== */

export async function logOut() {

  await signOut(auth);

}


/* ======================================================
   CURRENT USER
====================================================== */

export function currentUser() {

  return auth.currentUser;

}


/* ======================================================
   AUTH STATE
====================================================== */

export function onAuthChange(
  callback
) {

  return onAuthStateChanged(
    auth,
    callback
  );

}


/* ======================================================
   AUTH GATE
====================================================== */

export function applyAuthGate(user) {

  document
    .querySelectorAll(
      '[data-auth="protected"]'
    )
    .forEach(element => {

      element.classList.toggle(
        "auth-locked",
        !user
      );

    });


  document
    .querySelectorAll(
      '[data-auth="logged-in"]'
    )
    .forEach(element => {

      element.style.display =
        user ? "" : "none";

    });


  document
    .querySelectorAll(
      '[data-auth="logged-out"]'
    )
    .forEach(element => {

      element.style.display =
        user ? "none" : "";

    });

}


/* ======================================================
   FRIENDLY ERRORS
====================================================== */

export function friendlyError(
  code
) {

  const errors = {

    "auth/email-already-in-use":
      "An account with this email already exists.",

    "auth/invalid-email":
      "Please enter a valid email address.",

    "auth/weak-password":
      "Password must be at least 6 characters.",

    "auth/user-not-found":
      "No account found with this email.",

    "auth/wrong-password":
      "Incorrect password. Please try again.",

    "auth/invalid-credential":
      "Invalid email or password.",

    "auth/too-many-requests":
      "Too many attempts. Please wait a moment.",

    "auth/network-request-failed":
      "Network error. Check your connection.",

    "auth/missing-email":
      "Please enter your email address.",

    "auth/user-disabled":
      "This account has been disabled.",

    "auth/popup-closed-by-user":
      "Sign in window was closed. Please try again.",

    "auth/popup-blocked":
      "Sign in window was blocked. Please allow it.",

    "auth/account-exists-with-different-credential":
      "An account already exists with this email using a different sign in method."

  };


  return (
    errors[code] ||
    "Something went wrong. Please try again."
  );

}
