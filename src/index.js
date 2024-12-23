import "./styles.css";
// new todo created 
// delete property title 
// new todo created with previous deleted property first filled 

const addBtn = document.getElementById("add-todo");
let todoTitle = document.getElementById("todo-title");

class Todos{

    constructor(index,title,description,dueDate,priority){
        this.index = index;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    displayTodo(){
        console.log(this.index);
        console.log(this.title);
        console.log(this.description);
        console.log(this.dueDate);
        console.log(this.priority);
    }
}
let todoList = [];
let i = 0;
function addTodo(){
    todoList[i] = new Todos;
    todoList[i].index = i;
    todoList[i].title = todoTitle.value;
    
    todoList[i].displayTodo();
    i++
    
}



addBtn.addEventListener("click", addTodo);

    