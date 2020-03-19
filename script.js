// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click",function (){
//      console.log("click");
// });
var button = document.getElementById("enter");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
var del = document.getElementsByClassName("delete");

button.addEventListener("click",function(){
	 if(input.value !== "")
	 {
     var btn = document.createElement("button");
     btn.innerHTML = "Delete";
     btn.onclick = removeParent;
     var li = document.createElement("li");
     li.appendChild(document.createTextNode(input.value));     
     li.innerHTML = li.innerHTML + " ";
     li.appendChild(btn);
     ul.appendChild(li);
     input.value = "";
     }
});

// input.addEventListener("keypress",function(event){
// 	 if(input.value !== "" && event.keyCode === 13)
// 	 {
//      var li = document.createElement("li");
//      li.appendChild(document.createTextNode(input.value));     
//      ul.appendChild(li);
//      input.value = "";
//      }
// });

function getEventTarget(e){
     e = e || window.event;
     return e.target || e.srcElement;
}

ul.addEventListener("click",function(event){
     var target = getEventTarget(event);
     target.classList.toggle("done");
});

for (var i = 0 ; i < del.length ; i++)
{
     del[i].addEventListener("click",removeParent,false);
}
function removeParent(event)
{
   event.target.removeEventListener("click",removeParent,false);
   event.target.parentNode.remove();
}