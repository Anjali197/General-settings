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
    }

    
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
    var letters=/^{a-zA-Z}$/;
    
    if(name1==""){
        errormsg1.innerHTML="*please enter the name";
        
    }else if(name1.match(letters)){
        errormsg1.innerHTML="*user name must containonly alphabets"
    }
    if(name2==""){
        errormsg2.innerHTML="*please enter the name";
    }
    else if(name2.match(letters)){
        errormsg2.innerHTML="*user name must containonly alphabets"
    }
    if(phone==""){
        errormsg3.innerHTML="*please enter the phone number"
    }
    else if(phone.length>10){
        errormsg3.innerHTML="*phone number must be 10 character only"
    }
    if(company==""){
        errormsg4.innerHTML="*please enter the phone name"
    }
    else{

    }
   

}
var errormsg1=document.getElementById("msg1");
function  cancelbtn(){
    console.log(cancelbtn)
    if(errormsg1.innerHTML=="*please enter the name"){
        errormsg1.style.display="block";

    }
    
}