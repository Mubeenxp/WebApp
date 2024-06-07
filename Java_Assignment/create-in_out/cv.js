import { auth } from "./firbase.mjs";
import { onAuthStateChanged  ,signOut} from " https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { db } from "./firbase.mjs";
import { collection, addDoc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





var submit=document.getElementById('submit')
submit.addEventListener('click', async()=>{
  let name=document.getElementById('name').value
  let father=document.getElementById('father').value
  let email=document.getElementById('email').value
  let number=document.getElementById('number').value
  let textarea=document.getElementById('textarea').value
  let formFileLg=document.getElementById('formFileLg').value
  
  let Gender = document.getElementsByName('flexRadioDefault');
  let Gender_value;
  for (let i = 0; i < Gender.length; i++) {
    if (Gender[i].checked) {
      Gender_value = Gender[i].value;
      break;
    }
  }
      
      
   let city=document.getElementById('select1');
   let selectedCity=  city.options[city.selectedIndex].value;

  // let Skill=document.getElementById('flexCheckChecked')

  // let result = [];
 
  //     result = [];
  //     Skill.forEach(item => { // loop all the checkbox item
  //         if (item.checked) {  //if the check box is checked
  //             let data = {    // create an object
  //                 item: item.value,
  //                 selected: item.checked
  //             }
  //             result.push(data); //stored the objects to result array
  //         }
    
  

  let courses = [];
  let courseCheckboxes = ['HTML', 'CSS', 'javascript'];
  courseCheckboxes.forEach(function(id) {
    let checkbox = document.getElementById(id);
    if (checkbox.checked) {
      courses.push(checkbox.value);
    }
  });





  let jobdetails={
    name:name,
    father:father,
    formFileLg:formFileLg,
    email:email,
    number:number,
    textarea:textarea,
    city:selectedCity,
    Gender: Gender_value,
    Skill:courses
   
   
 
  }

  console.log(jobdetails);
  try {
    const docRef = await addDoc(collection(db, "Cvbank"), {
     ...jobdetails,

     });
    alert('form submit')
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);

   
  }

})













onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
      window.location.href='index.html'
    }
  });


  // sign out

  var signout=document.getElementById('signout')

  signout.addEventListener('click',()=>{

    
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.href='thank.html'
    }).catch((error) => {
      // An error happened.
      
      
    });
  })

    function getOption() {
      selectElement =
          document.querySelector('#select1');
      output =
          selectElement.options
          [selectElement.selectedIndex].value;
      document.querySelector('.output').textContent = output;
  }