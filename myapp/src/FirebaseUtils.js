import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIabCdE0Fghij_0ab0AAbcdE0abcAb0AbCcddEE",
  authDomain: "replace-with-your-own.firebaseapp.com",
  projectId: "replace-with-your-own",
  storageBucket: "__BUCKET__",
  messagingSenderId: "___sender_id__",
  appId: "__appid__",
  measurementId: "optional",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
