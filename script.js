
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const clearbtn = document.querySelector(".clear");


document.addEventListener("DOMContentLoaded",loadTodos);
todoButton.addEventListener("click",addTodo);
todolist.addEventListener("click",deleteTodos);
clearbtn.addEventListener("click",clearALLToDo);

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
// created List 
    const li = document.createElement("li");
    li.innerText= inputValue;
    todolist.append(li);
 // delete btn 
   const deletebtn = document.createElement("button");
   deletebtn.innerText="X";
   
   li.append(deletebtn);
   deletebtn.classList.add("deletebtn");

   todoInput.value="";
  
    saveTodos();
}
function deleteTodos(e){
    // todo delete btn 
    e.preventDefault();
    if(e.target.classList.contains("deletebtn")){
        e.target.parentElement.remove();
    }
    // mark completed 
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("completed");
    }
      
}
function loadTodos(){
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos){
        todolist.innerHTML = JSON.parse(savedTodos)
    }
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todolist.innerHTML));
}
function clearALLToDo(){
    todolist.innerHTML = "";
    localStorage.removeItem("todos");
}