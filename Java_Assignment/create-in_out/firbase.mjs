
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth } from " https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  import {getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDb_Dj_3gdn6wrX8LXg03sDRQDtOcXGTIE",
    authDomain: "qurbani-464d2.firebaseapp.com",
    projectId: "qurbani-464d2",
    storageBucket: "qurbani-464d2.appspot.com",
    messagingSenderId: "708182895850",
    appId: "1:708182895850:web:7c8483cbc47ea933027b93",
    measurementId: "G-N2QSDSYXM9"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app);