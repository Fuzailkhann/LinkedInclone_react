
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


// import firebase from 'firebase/app';
// import 'firebase/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyD5UjRCtoHTTIYRFY-4zATpfS4bGN6LzP8",
  
    authDomain: "linkedin-clone-74c03.firebaseapp.com",
  
    projectId: "linkedin-clone-74c03",
  
    storageBucket: "linkedin-clone-74c03.appspot.com",
  
    messagingSenderId: "506247327833",
  
    appId: "1:506247327833:web:9a5c1dd4aaa1c76b598148",
  
    measurementId: "G-5DPT49VW68"
  
  };
  

  const firebaseApp = initializeApp(firebaseConfig)
 const db = getFirestore(firebaseApp);
  //  const auth = firebase.auth() 
   
 const auth = getAuth(firebaseApp) 

export { db , auth};

  // const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app) 