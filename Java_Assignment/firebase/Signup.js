   // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

  import { getAuth ,createUserWithEmailAndPassword } from " https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
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
 
   
   
   
   // ************** Sign up new users **************

    var userbtn=document.getElementById('abc')

    userbtn.addEventListener('click',()=>{
 
   
   var userEmail=document.getElementById('emailAddress').value
   var userpassword=document.getElementById('passord').value
   console.log(userEmail,userpassword)
   
    createUserWithEmailAndPassword(auth, userEmail, userpassword)
   .then((userCredential) => {
     // Signed up 
     const user = userCredential.user;
     // ...
    
     window.location.href='index.html'
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
            
     console.log(errorCode)
     console.log(errorMessage)
    
    });
 
})


