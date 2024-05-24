
function todo() {
    var inputtext= document.getElementById('todo').value

    if (inputtext === "") {
        alert('Please write enter  data')
    } else {
        
    var showbox=document.getElementById('box2')
        
    var newpelemnet1=document.createElement('div')
    newpelemnet1.setAttribute('class','mk1') 
    showbox.appendChild(newpelemnet1)
    
    var newpelemnet2=document.createElement('div')
    newpelemnet2.setAttribute('class','mk2') 
    newpelemnet2.innerText=inputtext
    newpelemnet1.appendChild(newpelemnet2)
   
   localStorage.setItem("mydata", newpelemnet2.innerText);
    
    var newpelemnet3=document.createElement('div')
    newpelemnet3.setAttribute('class','mk3') 
    newpelemnet1.appendChild(newpelemnet3)
    
    var deletbtn=document.createElement('button')
    deletbtn.innerText='Delet'
    deletbtn.setAttribute('class','btn btn-success pb-5 ')
    deletbtn.addEventListener('click',myFunction)
    newpelemnet3.appendChild(deletbtn) 
}


}


function myFunction(e) {
    var b= e.target.parentNode. parentNode.remove()
}


function readValue() {
    var x = localStorage.getItem("mydata");
    document.getElementById("box2").innerHTML = x;
  }