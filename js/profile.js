function display(name){
    document.getElementById("name").innerText=name;
    
  }
  
  
  
  document.getElementById("showdata").onclick=function(){
    var name=document.getElementById("no");
    
    display(name);
  
  }