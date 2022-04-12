var counter=1
var arrayToDo =[]
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var close=document.getElementsByClassName("close")
var i;
function buttonAdd(){
    
    var inp=document.getElementById("inp");    
    arrayToDo.push(inp.value)
    
    var para=document.createElement("li")

   
    document.getElementById("inp").value=""
    var node=document.createTextNode(arrayToDo[counter-1])
    para.appendChild(node)
    var element=document.getElementById("demo")
    element.appendChild(para)
    // deleteButton.innerHTML="DELETE"
    // deleteButton.setAttribute('id',idDelete)
    // deleteButton.setAttribute('onclick','buttonDelete()')

    var span=document.createElement("span")
    var xicon=document.createTextNode("\u00D7")
    span.className="close"
    span.appendChild(xicon)
    para.appendChild(span);
    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display="none";
        }
    }

    
    // element.appendChild(deleteButton)
    console.log(arrayToDo)
    
    counter=counter+1
    
    
   
}
// function buttonDelete(){
//     let index=arrayToDo.indexOf(idDelete)
//     arrayToDo.splice(index,1)
// }
