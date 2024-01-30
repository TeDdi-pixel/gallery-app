import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.config";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth"

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app)
