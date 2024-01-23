let display=document.querySelector(".display");
let button=document.querySelectorAll("button");
const specal=["%","*","/","+","-","="];
let output="";

const calcuator=(btnvalue) =>{
if(btnvalue=== "=" && output !==""){

   output = eval(output.replace("%", "/100"));
} else if(btnvalue=== "AC"){
   output=""
} else if(btnvalue=== "DEL"){
   output =output.toString().slice(0,-1);  
} else {
   if(output === "" && specal.includes(btnvalue)) return;
   output += btnvalue;

}


display.value=output;
};

   


button.forEach((button)=> {
    button.addEventListener("click",(e)=>calcuator(e.target.dataset.value));
});
