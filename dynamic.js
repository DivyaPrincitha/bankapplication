let arr=document.getElementsByTagName("LI");
for(let i=0;i<arr.length;i++){
    let span=document.createElement("SPAN");
    let symbol=document.createTextNode("\u00D7");
    span.appendChild(symbol);
    span.className="close";
    arr[i].appendChild(span);
}
var arr1=document.getElementsByClassName("close");
for(let i=0;i<arr1.length;i++){
    arr1[i].onclick=function(){
        let clicked_element=this.parentElement;
        clicked_element.style.display="none";
    }
}

let ul=document.querySelector("ul");
ul.addEventListener("click",function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("checked");
    }
},false);

function newTask(){
    let li=document.createElement("LI");
    let data=document.getElementById("codeInput").value;
    let textNode=document.createTextNode(data);
    li.appendChild(textNode);
    if(data===""){
        alert("please enter a task");
    }
    // else{
    //     let ul=document.getElementById("codeUl");
    //     ul.appendChild(li);        
    // }
   else{
    li.addEventListener("keypress", function(data) {
    if (data.key === "Enter") {
    let ul=document.getElementById("codeUl");
         ul.appendChild(li); 
  }
});}
    document.getElementById("codeInput").value="";

let span=document.createElement("SPAN");
let symbol=document.createTextNode("\u00D7");
span.appendChild(symbol);
span.className="close";
li.appendChild(span);

for(let i=0;i<arr1.length;i++){ 
    arr1[i].onclick=function(){
        let element=this.parentElement;
        element.style.display="none";
        }
    }
};

var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});




  
