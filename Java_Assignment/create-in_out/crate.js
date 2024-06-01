import { auth } from "./firbase.mjs";
import { createUserWithEmailAndPassword } from " https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

var btn1=document.getElementById('Register');


btn1.addEventListener('click', ()=>{

    
    var email=document.getElementById('form3Example3cg').value
    var password=document.getElementById('form3Example4cg').value
    
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   window.location.href='index.html'
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode)
    console.log(errorMessage)
  });
} )