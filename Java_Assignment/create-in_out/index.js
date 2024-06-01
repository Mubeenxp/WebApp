import { auth } from "./firbase.mjs";
import {  signInWithEmailAndPassword} from " https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

var btn1=document.getElementById('login');


btn1.addEventListener('click', ()=>{

    
    var email=document.getElementById('form3Example3cg').value
    var password=document.getElementById('form3Example4cg').value
    
   
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...  
    
      window.location.href='cv.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
} )