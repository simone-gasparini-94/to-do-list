import {
    projectList,
} from "./todo.js"

export function addTodoUI() {
    const todoContainer = document.querySelector(".task-container");
    const newTodo = document.createElement("div");
    newTodo.classList.add("todo");

    const content = document.createElement("div");
    content.classList.add("content-container");

    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Name..."
    title.required = true;

    const dueDate = document.createElement("input");
    dueDate.type = "date";

    const priority = document.createElement("select");
    priority.classList.add("priority");

    const priorities = ["--Priority--", "High", "Medium", "Low"];

    priorities.forEach(level => {
        const option = document.createElement("option");
        option.value = level.toLowerCase();
        option.textContent = level;
        priority.appendChild(option);
    });

    console.log(projectList);

    

    content.append(title, dueDate, priority);
    newTodo.appendChild(content);
    todoContainer.appendChild(newTodo);
}