
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");

//document.addEventListener("DOMContentLoaded",getTodos);
todoButton.addEventListener("click",addTodo);
todolist.addEventListener("click",deleteTodos);

/*When user clicks “Add Todo”:

1️⃣ Read the input box value
2️⃣ Create a new <li> element
3️⃣ Put the text inside it
4️⃣ Create a delete button
5️⃣ Attach the delete button to the <li>
6️⃣ Add the <li> into the <ul> list  */

function addTodo(e) {
    e.preventDefault();
    const inputValue = todoInput.value.trim();
    if (inputValue==="") return;
     
    const li = document.createElement("li");
    li.innerText= inputValue;
    todolist.append(li);
 
   const deletebtn = document.createElement("button");
   deletebtn.innerText="X";
   li.append(deletebtn);
   deletebtn.classList.add("deletebtn");
   deletebtn.addEventListener("click",delelteTodos);
    
}
function delelteTodos(e){
    e.preventDefault();
    if(e.target.classList.contains("deletebtn"));{
        e.target.parentElement.remove();
    }
      
}
