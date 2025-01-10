import "./styles.css";
// new todo created 
// delete property title 
// new todo created with previous deleted property first filled 

const addBtn = document.getElementById("add-todo");
let todoTitle = document.getElementById("todo-title");
let todoDescription = document.getElementById("todo-description");
let todoDue = document.getElementById("todo-due");
let todoPriority = document.getElementById("todo-priority");
const todosContainer = document.getElementById("todos-container")

const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

const editBtn = document.getElementById("edit-btn");

let todoTitleEdit = document.getElementById("todo-title-edit");
let todoDescriptionEdit = document.getElementById("todo-description-edit");
let todoDueEdit = document.getElementById("todo-due-edit");
let todoPriorityEdit = document.getElementById("todo-priority-edit");


const openBtn = document.getElementById("form-open");
const closeBtn = document.getElementById("form-close");

const formContainer = document.getElementById("form-pop-container")

openBtn.addEventListener("click", () =>{
    formContainer.classList.add("open");
    // container.style.filter = "blur(3px)";
});
closeBtn.addEventListener("click", () =>{
    formContainer.classList.remove("open");
    // container.style.filter = "none";
});

// localStorage.clear();
// localStorage.setItem("totalItems",0);



let descContent = "";
class Todos{
    constructor(index,title,description,due,priority){
        this.index = index;
        this.title = title;
        this.description = description;
        this.due = due;                 
        this.priority = priority;
    }

    displayTodo(){
        const todo = document.createElement("div");
        todo.className = "todo"
        todo.id = this.index;
        todosContainer.appendChild(todo);

        const index = document.createElement("p");
        index.className = "index";
        index.textContent = this.index;
        todo.appendChild(index);

        const title = document.createElement("p");
        title.className = "title";
        title.textContent = this.title;
        todo.appendChild(title); 
        
        const priority = document.createElement("p");
        priority.className = "priority";
        priority.textContent = this.priority;
        todo.appendChild(priority);

        const due = document.createElement("p");
        due.className = "due";
        due.textContent = this.due;
        todo.appendChild(due);

        const openDescBtn = document.createElement("button");
        openDescBtn.type = "button";
        openDescBtn.textContent = "Info"
        

        descContent = this.description;
        todo.appendChild(openDescBtn);
        openDescBtn.addEventListener("click",openDesc)
        const deleteBtn  = document.createElement("button");
        deleteBtn.id = "delete-button"
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener("click",deleteTodo);
        todo.appendChild(deleteBtn);

        


        printTodos()
    }
}
let desc = "";
function openDesc(e){
    desc = document.createElement("div");
    desc.className = "desc";
    desc.id = todoList[e.target.parentElement.id].id;
    desc.textContent = todoList[e.target.parentElement.id].description;
    
    todosContainer.appendChild(desc);
    

    const descCloseBtn = document.createElement("button");
    descCloseBtn.type = "button";
    descCloseBtn.textContent = "X"
    desc.appendChild(descCloseBtn);
    descCloseBtn.addEventListener("click",removeDesc);

}

function removeDesc(){
    let element = document.getElementById(desc.id);
        element.remove();
}



function printTodos(){
    for (let index = 0; index < todoList.length; index++) {
        console.log(todoList[index].index);
        console.log(todoList[index].title);
        console.log(todoList[index].description);
        console.log(todoList[index].due);
        console.log(todoList[index].priority);        
    }
}
let todoList = [];
let i = 0;
let iPlaceholder = 0;
let deleted = false;
       



let localItems = localStorage.getItem("totalItems");
//  // Sample TODO
//  todoList[i] = new Todos;
//  todoList[i].index = i;
//  todoList[i].title = "Sample Title";
//  todoList[i].description = "Sample Description";
//  todoList[i].due = "31/12/2025";
//  todoList[i].priority = "Sample Priority";
//  populateLocalStorage(i);
function addTodo(){
    if (todoTitle.value && todoDescription.value && todoDue.value && todoPriority.value){
        // iPlaceholder = i;
        // i = checkUndefined();
        i = localItems;
        console.log(localItems);
        console.log(i);
        todoList[i] = new Todos;
        todoList[i].index = i;
        todoList[i].title = todoTitle.value;
        todoList[i].description = todoDescription.value;
        todoList[i].due = todoDue.value;
        todoList[i].priority = todoPriority.value;
        todoList[i].displayTodo();
        populateLocalStorage(i);
        formContainer.classList.remove("open");
        todoTitle.value = "";
        todoDescription.value = "";
        todoDue.value = "";
        todoPriority.value = "";
    }
}

function populateLocalStorage(i){
    
    localItems++;
    
    console.log("LOCAK ITEMS "+localItems);
    console.log("I= "+ i);
    localStorage.setItem("title."+i, todoList[i].title);
    localStorage.setItem("description."+i, todoList[i].description);
    localStorage.setItem("due."+i, todoList[i].due);
    localStorage.setItem("priority."+i, todoList[i].priority);
    localStorage.setItem("totalItems",localItems);
    
}

function RemoveLocalStorage(i){
    localStorage.removeItem("title."+i);
    localStorage.removeItem("description."+i);
    localStorage.removeItem("due."+i);
    localStorage.removeItem("priority."+i);
    localItems--;
    localStorage.setItem("totalItems",localItems);
}

function populatePage(){
    let item = localStorage.getItem("title.0");
    console.log(item)
    if (item != null) {
        for (let q = 0; q < localItems; q++) {
            console.log("THJIS IS I "+i);
            todoList[q] = new Todos;
            todoList[q].index = q;
            todoList[q].title = localStorage.getItem("title."+q)
            todoList[q].description = localStorage.getItem("description."+q);
            todoList[q].due = localStorage.getItem("due."+q);
            todoList[q].priority = localStorage.getItem("priority."+q)
            todoList[q].displayTodo();
        }
    }
}


function checkUndefined() {
    for (let index = 1; index < todoList.length;index++) {
        while(todoList[index].title == undefined) {
            console.log("new ID undefined:" + index);

            return index;
        }
        if(todoList[index].title != undefined){
            let q = iPlaceholder + 1;
            console.log("new ID plus:"+ q);
            return q; 
        }

    }
}


function searchTodo(){
    if (searchBox.value){
        todoList[searchBox.value].displayTodo();
    }
}

function deleteTodo(e){
        delete todoList[e.target.parentElement.id].title;
        delete todoList[e.target.parentElement.id].description;
        delete todoList[e.target.parentElement.id].due;
        delete todoList[e.target.parentElement.id].priority;

        RemoveLocalStorage(e.target.parentElement.id);
        console.log("deleting id "+e.target.parentElement.id);
        
        let element = document.getElementById(e.target.parentElement.id);
        element.remove();
}

let editBox = document.getElementById("edit-box");

function editTodo(){
    
    todoList[editBox.value].title = todoTitleEdit.value;
    todoList[editBox.value].description = todoDescriptionEdit.value;
    todoList[editBox.value].due = todoDueEdit.value;
    todoList[editBox.value].priority = todoPriorityEdit.value
    
}
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
    console.log("Yippee!")
  } else {
    // Too bad, no localStorage for us
    console.log("RAAAAA")
  }
    
populatePage();

addBtn.addEventListener("click", addTodo);
searchBtn.addEventListener("click",searchTodo);

// editBtn.addEventListener("click",editTodo); ADD EDIT Btn
        