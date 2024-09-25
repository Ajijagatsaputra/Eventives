import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAh7-3CzxOPLFz6kae-ltYPRxeQf2uG_Q",
  authDomain: "logineventives.firebaseapp.com",
  projectId: "logineventives",
  storageBucket: "logineventives.appspot.com",
  messagingSenderId: "782307829616",
  appId: "1:782307829616:web:fbd8038cba8dc40d7b91b5",
  measurementId: "G-DCL9LSQWCX",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

