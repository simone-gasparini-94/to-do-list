import './styles/global.css';
import './styles/sidebar.css';
import './styles/main.css';

import { changeActiveProject, setHeader, handleAddProject, renderActiveProjectTasks, renderProjectsButtons, handleAddTodo } from './ui';

document.addEventListener("DOMContentLoaded", () => {
    renderProjectsButtons();
    renderActiveProjectTasks();
    setHeader();
    const addProjectBtn = document.querySelector("#add-project-btn");
    addProjectBtn.addEventListener("click", handleAddProject);
    const addTodoBtn = document.querySelector("#add-todo-btn");
    addTodoBtn.addEventListener("click", handleAddTodo);
})