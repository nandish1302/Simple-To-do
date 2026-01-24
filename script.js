let todos = [] ; 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const clearbtn = document.querySelector(".clear");


document.addEventListener("DOMContentLoaded",loadTodos);
todoButton.addEventListener("click",addTodo);
todolist.addEventListener("click",deleteTodos);
clearbtn.addEventListener("click",clearALLToDo);

/*When user clicks “Add Todo”:

User clicks Add
   ↓
Read input
   ↓
Create todo OBJECT
   ↓
Push to todos[]
   ↓
saveTodos()
   ↓
renderTodos() */

function addTodo(e) {
    e.preventDefault();
    const inputValue = todoInput.value.trim();
    if (inputValue==="") return;
/* created List 
    const li = document.createElement("li");
    li.innerText= inputValue;
    todolist.append(li);
 // delete btn 
   const deletebtn = document.createElement("button");
   deletebtn.innerText="X";
   
   li.append(deletebtn);
   deletebtn.classList.add("deletebtn");

   todoInput.value="";
  
    saveTodos();*/
  const newTodo = {
    id : Date.now(),
    text : inputValue , 
    completed : false
  };
  todos.push(newTodo);
  saveTodos();
  renderTodos();
   todoInput.value="";

}
function deleteTodos(e){
    /* todo delete btn 
    e.preventDefault();
    if(e.target.classList.contains("deletebtn")){
        e.target.parentElement.remove();
    } */
   const target = e.target;
   if(target.classList.contains("deletebtn")){
      const id = target.parentElement.dataset.id;
        todos = todos.filter((todo) => todo.id != id);
        saveTodos();
        renderTodos();  
        return ; 


   } 

    // mark completed 
/*if(e.target.tagName==="LI"){
        e.target.classList.toggle("completed");
    }*/
    if (target.tagName === "LI") {
        const id = target.dataset.id;

        todos = todos.map(todo =>
            todo.id == id
                ? { ...todo, completed: !todo.completed }
                : todo
        );

        saveTodos();
        renderTodos();
    }
    
      
}
function loadTodos(){
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos){
        //todolist.innerHTML = JSON.parse(savedTodos);
        todos = JSON.parse(savedTodos);
        renderTodos();
    }
}
function saveTodos() {
  //   localStorage.setItem("todos", JSON.stringify(todolist.innerHTML));
   localStorage.setItem("todos", JSON.stringify(todos));                                                       
}
function clearALLToDo(){
     todos = [];
    saveTodos();
    renderTodos();
}

function renderTodos(){
 /* No DOM creation scattered across functions

✅ ONE function responsible for UI

✅ UI is derived from todos[]

✅ Re-render anytime data changes */
todolist.innerHTML = "";
todos.forEach((todo)=>{
    const li = document.createElement("li");
    li.innerText = todo.text;
    li.dataset.id = todo.id;
    if(todo.completed){
        li.classList.add("completed");
    }
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "X" ;
    deletebtn.classList.add("deletebtn");

    li.append(deletebtn);
    todolist.append(li);
});

}