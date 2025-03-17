import "./styles/styles.css";

import {
    displayTodos,
    displayProjects,
    displayProject,
} from "./ui.js"

import { 
    logTodoList,
    logCompletedList,
    logProjectList,
    addTodo,
    removeTodo,
    toggleComplete
} from "./todo.js";

document.addEventListener("DOMContentLoaded", () => {
    displayProjects();
    displayTodos();

    const addTodoBtn = document.querySelector(".add-task");
    const projectBtns = document.querySelectorAll(".project-btn");

    projectBtns.forEach(btn => {
        btn.addEventListener("click", displayProject)
    })
})