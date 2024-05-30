
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

  import { getAuth ,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from " https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBVkAQmdlNEl78d_5fJfwfsLwd1xsld9Dw",
    authDomain: "web-and-app-4c8ea.firebaseapp.com",
    projectId: "web-and-app-4c8ea",
    storageBucket: "web-and-app-4c8ea.appspot.com",
    messagingSenderId: "807149301665",
    appId: "1:807149301665:web:1276441150427c1d32a5e0",
    measurementId: "G-ZWN91TR83C"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
 

  


  



// ************** Sign in existing users **************  
var userloginbtn = document.getElementById('a');

userloginbtn.addEventListener('click',()=>{
  console.log('chal gya');
var email=document.getElementById('typeEmail').value
   var password=document.getElementById('Pass').value

signInWithEmailAndPassword(auth, email, password)
console.log(email,password)



signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    window.location.href='table.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
})