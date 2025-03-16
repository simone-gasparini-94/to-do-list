import {
    projectList,
} from "./todo.js"

export function addTodoUI() {
    const todoContainer = document.querySelector(".task-container");
    const newTodo = document.createElement("div");
    newTodo.classList.add("todo");

    const content = document.createElement("div");
    content.classList.add("content-container");

    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Name..."
    title.required = true;

    const dueDate = document.createElement("input");
    dueDate.type = "date";

    const priority = document.createElement("select");
    priority.classList.add("priority");

    const priorities = ["--Priority--", "High", "Medium", "Low"];

    priorities.forEach(level => {
        const option = document.createElement("option");
        option.value = level.toLowerCase();
        option.textContent = level;
        priority.appendChild(option);
    });

    console.log(projectList);

    content.append(title, dueDate, priority);
    newTodo.appendChild(content);
    todoContainer.appendChild(newTodo);
}

export function displayProjects() {
    const projectsContainer = document.querySelector(".projects-container");
    projectList.forEach(project => {
        console.log(project);
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("project-btn");
        projectBtn.textContent = project.name[0].toUpperCase() + project.name.slice(1);
        projectsContainer.appendChild(projectBtn);
    })
}

export function displayProject(event) {
    const title = document.querySelector(".project-title");
    console.log("click");
    title.textContent = event.target.textContent;
}