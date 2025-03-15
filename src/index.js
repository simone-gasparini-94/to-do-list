import "./styles/styles.css";
import {
    addTodoContainer,
} from "./ui.js"
import { 
    logTodoList,
    logCompletedList,
    logProjectList,
    addTodo,
    removeTodo,
    toggleComplete
} from "./todo.js";

const addTodoButton = document.querySelector(".add-task");
addTodoButton.addEventListener("click", addTodoContainer);

