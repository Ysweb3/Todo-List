import "./styles.css";
// new todo created 
// delete property title 
// new todo created with previous deleted property first filled 

const addBtn = document.getElementById("add-todo");
let todoTitle = document.getElementById("todo-title");
let todoDescription = document.getElementById("todo-description");
let todoDue = document.getElementById("todo-due");
let todoPriority = document.getElementById("todo-priority");

const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

class Todos{

    constructor(index,title,description,due,priority){
        this.index = index;
        this.title = title;
        this.description = description;
        this.due = due;
        this.priority = priority;
    }

    displayTodo(){
        console.log(this.index);
        console.log(this.title);
        console.log(this.description);
        console.log(this.due);
        console.log(this.priority);
    }
}
let todoList = [];
let i = 0;
function addTodo(){
    todoList[i] = new Todos;
    todoList[i].index = i;
    todoList[i].title = todoTitle.value;
    todoList[i].description = todoDescription.value;
    todoList[i].due = todoDue.value;
    todoList[i].priority = todoPriority.value;
    todoList[i].displayTodo();
    i++
       
}

function searchTodo(){
    todoList[searchBox.value].displayTodo();
}


addBtn.addEventListener("click", addTodo);
searchBtn.addEventListener("click",searchTodo);
    