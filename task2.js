var textEnter1=document.getElementById("text1");
var textEnter2=document.getElementById("text2");
var textEnter3=document.getElementById("text3");
var textEnter4=document.getElementById("text4");
var resultEnter=document.getElementById('h2');
var resultbox=document.getElementById("result-box");
var showresult=document.getElementById("show");
var closebtn=document.getElementById('close');


function result(){
    if(textEnter1.value && textEnter2.value && textEnter3.value && textEnter4.value){
        resultEnter.innerHTML= "Name:" +textEnter1.value +" "+ textEnter2.value+"<br>"+"phone:"+textEnter3.value+"<br>"+"Company:"+textEnter4.value;
   
        showresult.style.display="block"
        showresult.style.color="red";
        resultEnter.style.color='black';
        closebtn.style.display="block";
        errormsg1.style.display="none";
        errormsg2.style.display="none";
        errormsg3.style.display="none";
        errormsg4.style.display="none";
    }
// if(errormsg1 && errormsg2 && errormsg3 && errormsg4){
//     showresult.style.visibility="hidden";
// }
    
    // // alert(1);
    // validateform();

    
}
function removebtn(){
    
    showresult.style.display="none"
    textEnter1.value="";
    textEnter2.value="";
    textEnter3.value="";
    textEnter4.value="";
    textEnter1.value="";
    
    
}
// for validation
var errormsg1=document.getElementById("msg1");
var errormsg2=document.getElementById("msg2");
var errormsg3=document.getElementById("msg3");
var errormsg4=document.getElementById("msg4");

function validateform(){
    
    

    var name1=document.getElementById("text1").value;
    var name2=document.getElementById("text2").value;
    var phone=document.getElementById("text3").value;
    var company=document.getElementById("text4").value;
    var letters="/^{a-zA-Z}$/";
    
    console.log(name1);
    
    if(name1==""){
        errormsg1.innerHTML="*please enter the name";
        
    }else if(name1.match("^[a-zA-Z]*$")){
        errormsg1.innerHTML="*user name must contain only alphabets"
    }
    if(name2==""){
        errormsg2.innerHTML="*please enter the name";
    }
    else if(name2.match(letters)){
        errormsg2.innerHTML="*user name must contain only alphabets"
    }
    if(phone==""){
        errormsg3.innerHTML="*please enter the phone number"
    }
    else if(phone.length>10){
        errormsg3.innerHTML="*phone number must be 10 character only"
    }
    if(company==""){
        errormsg4.innerHTML="*please enter the  name"
    }
    else{

    }
   

}
var errormsg1=document.getElementById("msg1");
function  cancelbtn(){
   
    // if(errormsg1.innerHTML=="*please enter the name"){
    //     errormsg1.style.display="none";

    // }
    //  if(errormsg2.innerHTML="*please enter the name"){
    //     errormsg2.style.display="none";
    // }
    
    // if(errormsg3.innerHTML="*please enter the phone number"){
    //     errormsg3.style.display="none";
    // }
    
    // if(errormsg4.innerHTML="*please enter the  name"){
    //     errormsg4.style.display="none";
    // }
    if( errormsg1 && errormsg2 && errormsg3 && errormsg4){
            errormsg1.style.display="none";
            errormsg2.style.display="none";
            errormsg3.style.display="none";
            errormsg4.style.display="none";
            errormsg1.style.display="none";
        }



    
}
function validationPhone(){
    
    var newphone=document.getElementById("text3").value;
    var phone=document.getElementById("text3").value;
    console.log(newphone);
    if(isNaN(newphone)){
        document.getElementById("text3").value  =newphone.replace(/^[a-zA-Z]*$/g, "");
    }
    if(phone.length>10){
        errormsg3.innerHTML="*phone number must be 10 character only"

}
else{
    errormsg3.innerHTML=" "
}


if(isNaN(newphone)){
    document.getElementById("text3").value  =newphone.replace(/^[a-zA-Z]*$/g, "");
}
}

function validatename(){
    var name1=document.getElementById("text1").value;
    
    if(!isNaN(name1)){
        document.getElementById("text1").value  =name1.replace(/^[0-9]/g, "");
    }

    

    if(name1.match(/^[0-9]/g)){
         errormsg1.innerHTML="*user name must contain only alphabets"
        
    }
    else{
        errormsg1.innerHTML="" 
    }
    

}
function validatename1(){
    var name2=document.getElementById("text2").value;
    


    

    if(name2.match(/^[0-9]/g)){
         errormsg2.innerHTML="* name must contain only alphabets"
        
    }
    else{
        errormsg2.innerHTML=" " 
    }
    if(!isNaN(name2)){
        document.getElementById("text2").value  =name2.replace(/^[0-9]/g, "");
    }

}
function validatename4(){
    var name4=document.getElementById("text4").value;
      if(name4.match(/^[0-9]/g)){
         errormsg4.innerHTML="*user name must contain only alphabets"
        
    }
    else{
        errormsg4.innerHTML=" " 
    }
    if(!isNaN(name4)){
        document.getElementById("text4").value  =name4.replace(/^[0-9]/g, "");
    }

}