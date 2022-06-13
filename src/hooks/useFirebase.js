import firebaseInitialization from "../Firebase/firebase.Init";
import { useState , useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged
} from "firebase/auth";


firebaseInitialization();

const useFirebase = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const [loggedInUser, setLoggedInUser] = useState({});
  
  const googleSignIn=()=>{
    return signInWithPopup(auth, provider);
    
  }

  
  const googleSignOut=()=>{
    signOut(auth)
    .then(() => {
        setLoggedInUser({});
      
    })
    .catch((error) => {
      
    });
  }

    
    useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              setLoggedInUser(user)
              console.log("from OSC:",user);
              
            } else {
              
            }
          });

    },[])


return{
    loggedInUser,
    googleSignIn,
    googleSignOut
}




};
export default useFirebase;
