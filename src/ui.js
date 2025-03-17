import {
    projectsList,
} from "./todo.js"


export function displayTodos() {
    const todosContainer = document.querySelector(".todo-container");
    todosContainer.innerHTML = "";
    const projectTitle = document.querySelector(".project-title");
    const activeProject = projectsList.find(project => project.name === projectTitle.textContent.toLowerCase());
    activeProject.list.forEach(element => {
        const todo = document.createElement("div");
        todo.classList.add("todo");
        todo.textContent = element.name;
        todosContainer.appendChild(todo);
    })
}

export function displayProjects() {
    const projectsContainer = document.querySelector(".projects-container");
    projectsList.forEach(project => {
        console.log(project);
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("project-btn");
        projectBtn.id = project.name;
        projectBtn.textContent = project.name[0].toUpperCase() + project.name.slice(1);
        projectsContainer.appendChild(projectBtn);
    })
    const initialProject = document.querySelector("#personal");
    initialProject.classList.add("active");
}

export function displayProject(event) {
    const title = document.querySelector(".project-title");
    const projectBtns = document.querySelectorAll(".project-btn");
    projectBtns.forEach(button => {
        button.classList.remove("active");
    });
    const button = event.target;
    button.classList.add("active");
    title.textContent = button.textContent.toUpperCase();
    displayTodos();
}