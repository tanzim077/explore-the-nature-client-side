import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireBaseConfig";

const initializedApp = () => {
    initializeApp(firebaseConfig);
}

export default initializedApp;