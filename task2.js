var textEnter1=document.getElementById("text1");
var textEnter2=document.getElementById("text2");
var textEnter3=document.getElementById("text3");
var textEnter4=document.getElementById("text4");
var resultEnter=document.getElementById('h2');
var resultbox=document.getElementById("result-box");
var showresult=document.getElementById("show");
var closebtn=document.getElementById('close');


function result(){
    // // alert(1);
    // validateform();

    resultEnter.innerHTML= "Name:" +textEnter1.value +" "+ textEnter2.value+"<br>"+"phone:"+textEnter3.value+"<br>"+"Company:"+textEnter4.value;
   
    showresult.style.display="block"
    showresult.style.color="red";
    resultEnter.style.color='black';
    closebtn.style.display="block";

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

// function validateform(){
//     var name1=document.getElementById("text1");
//     if(name1.value==""){
//         alert("np");
//         return false;
//     }
//     else{

//     }
   

// }