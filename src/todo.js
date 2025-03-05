const todoList = [];
const projectList = [];

class Todo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.completed = false;
    }
}

export function logTodoList() {
    console.log(todoList);
}

export function addTodo(title, description, dueDate, priority, project) {
    const todo = new Todo(title, description, dueDate, priority, project);
    todoList.push(todo);
}

export function removeTodo(index) {
    todoList.splice(index, 1);
}
