
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.Config";

const firebaseInitialization=()=>{

    initializeApp(firebaseConfig);
}
export default firebaseInitialization;