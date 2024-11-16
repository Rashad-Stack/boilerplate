import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "keep-react";
import { json, redirect } from "react-router-dom";
import { auth } from "../firebase/config";

export const login = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  try {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return json({ error: "Please fill all the fields" }, { status: 400 });
    }

    // Perform login logic here
    await signInWithEmailAndPassword(auth, email, password);

    // Redirect to the previous route or a default route
    return redirect(searchTerm);
  } catch (error) {
    console.error(error);
    return {
      error: error.message,
    };
  }
};

export const register = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    if (!name || !email || !password) {
      return {
        error: "Please fill all the fields",
      };
    }
    const result = await createUserWithEmailAndPassword(auth, email, password);

    // Set the user's display name
    await updateProfile(result.user, {
      displayName: name,
    });

    return redirect(searchTerm);
  } catch (error) {
    console.error(error);
    return json({ error: error.message }, { status: 400 });
  }
};

export const logout = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";

  try {
    await signOut(auth);
    return redirect(searchTerm);
  } catch (error) {
    console.error(error);
    toast.error(error.message);
    return redirect(searchTerm);
  }
};

export const loadUser = async () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      },
      reject
    );
  });
};

export const loginWithGoogle = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  const provider = new GoogleAuthProvider();

  try {
    await signInWithPopup(auth, provider);
    await setPersistence(auth, browserLocalPersistence);

    return redirect(searchTerm);
  } catch (error) {
    console.error(error);
    toast.error(error.message);
    return redirect("/auth/login");
  }
};

export const loginWithGithub = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("from") || "/";
  const provider = new GithubAuthProvider();

  try {
    await signInWithPopup(auth, provider);
    await setPersistence(auth, browserLocalPersistence);
    return redirect(searchTerm);
  } catch (error) {
    console.error(error);
    toast.error(error.message);
    return redirect("/auth/login");
  }
};
