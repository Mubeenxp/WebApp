
    
function data(){
    var a= document.getElementById('username').value;
    var b= document.getElementById('l_name').value;
    var c= document.getElementById('father').value;
    var d= document.getElementById('cnic').value;
    var e= document.getElementById('mobil').value;
    var f= document.getElementById('designation').value;
    var g= document.getElementById('deparmnet').value;
    var h= document.getElementById('files').value;
    var i= document.getElementById('email').value;
    
    var atposition=i.indexOf("@");  
        var dotposition=i.lastIndexOf(".");  

    if (a==""||b==""||c==""||d==""||e==""||f==""||g=="") {
        alert("All Fields are Mendatory");
        return false;
    }
    else if (isNaN(d)) {
        // alert("ID card ! only number are allowed!");
        document.getElementById("numloc").innerHTML="Enter Numeric value only";
        return false;
     }
    else if (isNaN(e)) {
       // alert("Mobil !  only number are allowed!");
        document.getElementById("numlocmobile").innerHTML="Enter Numeric value only";
        return false;
     }
    else if (d.length > 13 ) {
        alert("ID card numbers are more than thirteen");
        return false;
     }
    else if (d.length < 13 ) {
        alert("ID card numbers are less than thirteen");
        return false;
     }
    else if (e.length > 11 ) {
        alert("Mobile number has more than eleven digits");
        return false;
     }
    else if (e.length < 11 ) {
        alert("Mobile number has digits less than eleven");
        return false;
     }
         
   else if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
  return false;  
  } 
    else
    {
        true;
    }
    } 
      console .log(document.forms)