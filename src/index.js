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
        todo.textContent = this.index +" "+ this.title +" "+ this.description +" "+ this.due +" "+ this.priority;
        const deleteBtn  = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener("click",deleteTodo);
        todo.appendChild(deleteBtn);

        todosContainer.appendChild(todo);

        printTodos()
    }
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
        //Sample TODO
        todoList[i] = new Todos;
        todoList[i].index = i;
        todoList[i].title = "Sample";
        todoList[i].description = "Sample";
        todoList[i].due = "Sample";
        todoList[i].priority = "Sample";
        todoList[i].displayTodo();

function addTodo(){
    if (todoTitle.value && todoDescription.value && todoDue.value && todoPriority.value){
        iPlaceholder = i;
        i = checkUndefined();
        console.log(i);
        todoList[i] = new Todos;
        todoList[i].index = i;
        todoList[i].title = todoTitle.value;
        todoList[i].description = todoDescription.value;
        todoList[i].due = todoDue.value;
        todoList[i].priority = todoPriority.value;
        todoList[i].displayTodo();

        formContainer.classList.remove("open");
        todoTitle.value = "";
        todoDescription.value = "";
        todoDue.value = "";
        todoPriority.value = "";
    }
}

function checkUndefined() {
    for (let index = 0; index < todoList.length;index++) {
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

addBtn.addEventListener("click", addTodo);
searchBtn.addEventListener("click",searchTodo);

editBtn.addEventListener("click",editTodo);
        