

function showDate(){
    document.getElementById('demo').innerHTML=Date();
}


function promptUser(){
    var name= window.prompt("enter your name");
    if(name!=null && name!=""){
        document.getElementById("name").innerHTML="Hello "+name;
    }
  
}