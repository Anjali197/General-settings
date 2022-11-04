function validate()
{
var textEnter1=document.getElementById("text1");
var resultEnter=document.getElementById('h2');
var error=document.getElementById("msg");
// function result(){
//     resultEnter.innerHTML= "Name:" +textEnter1.value
// }


    if(textEnter1.value=="")
    {
        // alert(1);
        error.style.visibility="visible";
        


        }
        else{
            error.style.visibility="hidden";
        }

   }