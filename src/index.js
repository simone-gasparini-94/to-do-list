import './styles/global.css';
import './styles/sidebar.css';
import './styles/main.css';

import { activeProject, projects } from "./logic";
import { changeActiveProject, handleAddProject, renderActiveProjectTasks, renderProjectsButtons } from './ui';

document.addEventListener("DOMContentLoaded", () => {
    renderProjectsButtons();
    renderActiveProjectTasks();
    const addProjectBtn = document.querySelector("#add-project-btn");
    addProjectBtn.addEventListener("click", handleAddProject);
    const projectBtns = document.querySelectorAll(".project-btn");
    projectBtns.forEach((button) => {
        button.addEventListener("click", changeActiveProject);
        button.addEventListener("click", renderActiveProjectTasks);
    })
})