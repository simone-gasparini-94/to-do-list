import './styles/global.css';
import './styles/sidebar.css';
import './styles/main.css';

import { activeProject, projects } from "./logic";
import { handleAddProject, renderProjectsButtons } from './ui';

document.addEventListener("DOMContentLoaded", () => {
    renderProjectsButtons();

    const addProjectBtn = document.querySelector("#add-project-btn");
    addProjectBtn.addEventListener("click", handleAddProject);
})