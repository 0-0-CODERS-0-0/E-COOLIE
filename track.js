function trackcoolie(platform){
    if(platform==1){
        coolie.style.display="inline";
        pass.style.display="inline"; 
    }
    else if(platform==2){
        coolie2.style.display="inline";
        pass2.style.display="inline";

    }
    else{
        alert("Enter right platform");
    }
}

var coolie=document.querySelector("#dot1");
var pass=document.querySelector("#dot2");
var coolie2=document.querySelector("#dot3");
var pass2=document.querySelector("#dot4");
coolie.style.display="none";
pass.style.display="none";
coolie2.style.display="none";
pass2.style.display="none";
document.getElementById("result").onclick=function(){
    var platform=document.getElementById("pt1").value;
    trackcoolie(platform);
};