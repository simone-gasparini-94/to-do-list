import "./styles/styles.css";
import {
    addTodoUI,
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

    const addTodoBtn = document.querySelector(".add-task");
    const projectBtns = document.querySelectorAll(".project-btn");

    addTodoBtn.addEventListener("click", addTodoUI);
    projectBtns.forEach(btn => {
        btn.addEventListener("click", displayProject)
    })
})