import { activeProject, addProject, projects } from "./logic";

export function renderProjectsButtons() {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";
    projects.forEach((project) => {
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("project-btn");
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "25");
        svg.setAttribute("height", "25");
        svg.classList.add("icon");
        svg.id = "hashtag";
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M20.4881 14.8373H15.9881V10.3373H20.4881C20.687 10.3373 20.8778 10.2583 21.0184 10.1176C21.1591 9.97699 21.2381 9.78622 21.2381 9.58731C21.2381 9.3884 21.1591 9.19763 21.0184 9.05698C20.8778 8.91633 20.687 8.83731 20.4881 8.83731H15.9881V4.33731C15.9881 4.1384 15.9091 3.94763 15.7684 3.80698C15.6278 3.66633 15.437 3.58731 15.2381 3.58731C15.0392 3.58731 14.8484 3.66633 14.7078 3.80698C14.5671 3.94763 14.4881 4.1384 14.4881 4.33731V8.83731H9.9881V4.33731C9.9881 4.1384 9.90908 3.94763 9.76843 3.80698C9.62778 3.66633 9.43701 3.58731 9.2381 3.58731C9.03919 3.58731 8.84842 3.66633 8.70777 3.80698C8.56712 3.94763 8.4881 4.1384 8.4881 4.33731V8.83731H3.9881C3.78919 8.83731 3.59842 8.91633 3.45777 9.05698C3.31712 9.19763 3.2381 9.3884 3.2381 9.58731C3.2381 9.78622 3.31712 9.97699 3.45777 10.1176C3.59842 10.2583 3.78919 10.3373 3.9881 10.3373H8.4881V14.8373H3.9881C3.78919 14.8373 3.59842 14.9163 3.45777 15.057C3.31712 15.1976 3.2381 15.3884 3.2381 15.5873C3.2381 15.7862 3.31712 15.977 3.45777 16.1176C3.59842 16.2583 3.78919 16.3373 3.9881 16.3373H8.4881V20.8373C8.4881 21.0362 8.56712 21.227 8.70777 21.3676C8.84842 21.5083 9.03919 21.5873 9.2381 21.5873C9.43701 21.5873 9.62778 21.5083 9.76843 21.3676C9.90908 21.227 9.9881 21.0362 9.9881 20.8373V16.3373H14.4881V20.8373C14.4881 21.0362 14.5671 21.227 14.7078 21.3676C14.8484 21.5083 15.0392 21.5873 15.2381 21.5873C15.437 21.5873 15.6278 21.5083 15.7684 21.3676C15.9091 21.227 15.9881 21.0362 15.9881 20.8373V16.3373H20.4881C20.687 16.3373 20.8778 16.2583 21.0184 16.1176C21.1591 15.977 21.2381 15.7862 21.2381 15.5873C21.2381 15.3884 21.1591 15.1976 21.0184 15.057C20.8778 14.9163 20.687 14.8373 20.4881 14.8373ZM9.9881 14.8373V10.3373H14.4881V14.8373H9.9881Z");
        const darkGrey = getComputedStyle(document.documentElement).getPropertyValue("--dark-grey").trim();
        path.setAttribute("fill", darkGrey);
        const span = document.createElement("span");
        span.classList.add("btn-text");
        span.textContent = project.name[0].toUpperCase() + project.name.slice(1);
        svg.append(path);
        projectBtn.append(svg, span);
        projectsContainer.append(projectBtn);
    })
}

export function handleAddProject() {
    const projectsContainer = document.querySelector(".projects-container");
    if (!projectsContainer.querySelector(".project-div")) {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-div");
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "25");
        svg.setAttribute("height", "25");
        svg.classList.add("icon");
        svg.id = "hashtag";
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M20.4881 14.8373H15.9881V10.3373H20.4881C20.687 10.3373 20.8778 10.2583 21.0184 10.1176C21.1591 9.97699 21.2381 9.78622 21.2381 9.58731C21.2381 9.3884 21.1591 9.19763 21.0184 9.05698C20.8778 8.91633 20.687 8.83731 20.4881 8.83731H15.9881V4.33731C15.9881 4.1384 15.9091 3.94763 15.7684 3.80698C15.6278 3.66633 15.437 3.58731 15.2381 3.58731C15.0392 3.58731 14.8484 3.66633 14.7078 3.80698C14.5671 3.94763 14.4881 4.1384 14.4881 4.33731V8.83731H9.9881V4.33731C9.9881 4.1384 9.90908 3.94763 9.76843 3.80698C9.62778 3.66633 9.43701 3.58731 9.2381 3.58731C9.03919 3.58731 8.84842 3.66633 8.70777 3.80698C8.56712 3.94763 8.4881 4.1384 8.4881 4.33731V8.83731H3.9881C3.78919 8.83731 3.59842 8.91633 3.45777 9.05698C3.31712 9.19763 3.2381 9.3884 3.2381 9.58731C3.2381 9.78622 3.31712 9.97699 3.45777 10.1176C3.59842 10.2583 3.78919 10.3373 3.9881 10.3373H8.4881V14.8373H3.9881C3.78919 14.8373 3.59842 14.9163 3.45777 15.057C3.31712 15.1976 3.2381 15.3884 3.2381 15.5873C3.2381 15.7862 3.31712 15.977 3.45777 16.1176C3.59842 16.2583 3.78919 16.3373 3.9881 16.3373H8.4881V20.8373C8.4881 21.0362 8.56712 21.227 8.70777 21.3676C8.84842 21.5083 9.03919 21.5873 9.2381 21.5873C9.43701 21.5873 9.62778 21.5083 9.76843 21.3676C9.90908 21.227 9.9881 21.0362 9.9881 20.8373V16.3373H14.4881V20.8373C14.4881 21.0362 14.5671 21.227 14.7078 21.3676C14.8484 21.5083 15.0392 21.5873 15.2381 21.5873C15.437 21.5873 15.6278 21.5083 15.7684 21.3676C15.9091 21.227 15.9881 21.0362 15.9881 20.8373V16.3373H20.4881C20.687 16.3373 20.8778 16.2583 21.0184 16.1176C21.1591 15.977 21.2381 15.7862 21.2381 15.5873C21.2381 15.3884 21.1591 15.1976 21.0184 15.057C20.8778 14.9163 20.687 14.8373 20.4881 14.8373ZM9.9881 14.8373V10.3373H14.4881V14.8373H9.9881Z");
        const darkGrey = getComputedStyle(document.documentElement).getPropertyValue("--dark-grey").trim();
        path.setAttribute("fill", darkGrey);
        svg.append(path);
        const input = document.createElement("input");
        input.classList.add("text-input");
        input.type = "text";
        input.placeholder = "New..";
        projectDiv.append(svg, input);
        projectsContainer.append(projectDiv);
        input.focus();
        input.addEventListener("keyup", handleKeyPress);
        input.addEventListener("blur", handleBlur);
    }
}

function handleKeyPress(event) {
    if (event.key == "Enter" && event.target.value.trim()) {
        console.log("enter");
        addProject(event.target.value);
        renderProjectsButtons();
    } else if (event.key == "Escape") {
        event.target.closest(".project-div").remove();
    }
}

function handleBlur(event) {
    if (!event.target.value.trim()) {
        event.target.closest(".project-div").remove();
    }
}


