import './styles/global.css';
import './styles/sidebar.css';
import './styles/main.css';

import { setHeader, handleAddProject, renderActiveProjectTasks, renderProjectsButtons, handleAddTodo, changeActiveFilter } from './ui';

document.addEventListener("DOMContentLoaded", () => {
    renderProjectsButtons();
    renderActiveProjectTasks();
    setHeader();
    const addProjectBtn = document.querySelector("#add-project-btn");
    addProjectBtn.addEventListener("click", handleAddProject);
    const addTodoBtn = document.querySelector("#add-todo-btn");
    addTodoBtn.addEventListener("click", handleAddTodo);
    const filterBtns = document.querySelectorAll(".filter");
    const allFilterBtn = document.querySelector("#all-filter-btn");
    const todayFilterBtn = document.querySelector("#today-filter-btn");
    const completedFilterBtn = document.querySelector("#completed-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", changeActiveFilter);
    })
})