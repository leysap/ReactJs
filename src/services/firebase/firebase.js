import { initializeApp }  from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAuhXnqb5yY9feU5QNTX_DH5s72LVQFOg4",
    authDomain: "reactjs-ecommerce-b8e58.firebaseapp.com",
    projectId: "reactjs-ecommerce-b8e58",
    storageBucket: "reactjs-ecommerce-b8e58.appspot.com",
    messagingSenderId: "1071067099783",
    appId: "1:1071067099783:web:f36f3b149905afac5cfe22"
  };


const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)