import './styles/global.css';
import './styles/sidebar.css';
import './styles/main.css';

import { setHeader, handleAddProject, renderTodos, renderProjectsButtons, handleAddTodo, changeActiveFilter } from './ui';
import { filterAll } from './logic';

document.addEventListener("DOMContentLoaded", () => {
    renderProjectsButtons();
    filterAll();
    renderTodos();
    setHeader();
    const addProjectBtn = document.querySelector("#add-project-btn");
    addProjectBtn.addEventListener("click", handleAddProject);
    const addTodoBtn = document.querySelector("#add-todo-btn");
    addTodoBtn.addEventListener("click", handleAddTodo);
    const filterBtns = document.querySelectorAll(".filter");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", changeActiveFilter);
    })
})