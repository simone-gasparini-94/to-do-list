import './styles/global.css';
import './styles/sidebar.css';
import './styles/main.css';

import { setHeader, handleAddProject, handleRemoveProject, renderTodos, renderProjectsButtons, handleAddTodo, changeActiveFilter, changeFilterToAll } from './ui';
import { init } from './logic';

document.addEventListener("DOMContentLoaded", () => {
    init();
    renderProjectsButtons();
    changeFilterToAll();
    renderTodos();
    setHeader();
    const addProjectBtn = document.querySelector("#add-project-btn");
    addProjectBtn.addEventListener("click", handleAddProject);
    const removeProjectBtn = document.querySelector("#remove-project-btn");
    removeProjectBtn.addEventListener("click", handleRemoveProject);
    const addTodoBtn = document.querySelector("#add-todo-btn");
    addTodoBtn.addEventListener("click", handleAddTodo);
    const filterBtns = document.querySelectorAll(".filter");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", changeActiveFilter);
    })
});