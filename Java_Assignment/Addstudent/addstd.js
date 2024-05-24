 var  studnetdata=[];

 function addstudnet(){
   var studnet={
        firstname:prompt('firstname'),
        lirstname:prompt('lirstname'),
        age:prompt('age enter'),
    }
    studnetdata.push(studnet)
    console.log(studnetdata);
 }

 function stdchek (){
    var chek= prompt('enter no')
    console.log(studnetdata [chek].firstname,studnetdata[chek].lirstname)
 }

 addstudnet.prototype.getfulname=function(){
   return `$ {this. firstname},$ { this. firstname}`
 }