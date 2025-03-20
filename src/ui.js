import { addTodo, deleteTodo, addProject, getActiveProject, getProjects, setActiveProject, filterAll, filterToday, filterCompleted, getFilteredTodos, toggleComplete } from "./logic";
import { format } from "date-fns";

export function renderProjectsButtons() {
    const projectsContainer = document.querySelector(".projects-container");
    projectsContainer.innerHTML = "";
    getProjects().forEach((project) => {
        const projectBtn = document.createElement("button");
        projectBtn.classList.add("project-btn");
        projectBtn.id = project.name;
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
        projectBtn.addEventListener("click", changeActiveProject);
        projectBtn.addEventListener("click", renderFilteredTodos);
        projectBtn.addEventListener("click", setHeader);
    })
}

export function handleAddTodo() {
    const todoContainer = document.querySelector(".todo-container");
    if (!todoContainer.querySelector(".new-todo-div")) {
        let activeProject = getActiveProject();
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("new-todo-div");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.disabled = true;
        checkbox.classList.add("fake-checkbox");
        const inputsContainer = document.createElement("div");
        inputsContainer.classList.add("inputs-container")
        const titleInput = document.createElement("input");
        titleInput.classList.add("todo-title-input");
        titleInput.type = "text";
        titleInput.placeholder = "new...";
        const dueToContainer = document.createElement("div");
        dueToContainer.classList.add("due-to-container");
        const dueTo = document.createElement("input");
        dueTo.classList.add("todo-due-to-input");
        dueTo.type = "date";
        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btn-container");
        const submitBtn = document.createElement("button");
        submitBtn.classList.add("submit-to-do-btn");
        submitBtn.textContent = "ADD";
        const cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-add-to-do-btn");
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "12");
        svg.setAttribute("height", "12");
        svg.setAttribute("viewBox", "0 0 25 25");
        svg.classList.add("icon");
        svg.id = "cancel";
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M19.2806 18.2194C19.3503 18.289 19.4056 18.3718 19.4433 18.4628C19.481 18.5539 19.5004 18.6514 19.5004 18.75C19.5004 18.8485 19.481 18.9461 19.4433 19.0372C19.4056 19.1282 19.3503 19.2109 19.2806 19.2806C19.2109 19.3503 19.1282 19.4056 19.0372 19.4433C18.9461 19.481 18.8485 19.5004 18.75 19.5004C18.6514 19.5004 18.5539 19.481 18.4628 19.4433C18.3718 19.4056 18.289 19.3503 18.2194 19.2806L12 13.0603L5.78061 19.2806C5.63988 19.4213 5.44901 19.5004 5.24999 19.5004C5.05097 19.5004 4.8601 19.4213 4.71936 19.2806C4.57863 19.1399 4.49957 18.949 4.49957 18.75C4.49957 18.551 4.57863 18.3601 4.71936 18.2194L10.9397 12L4.71936 5.78061C4.57863 5.63988 4.49957 5.44901 4.49957 5.24999C4.49957 5.05097 4.57863 4.8601 4.71936 4.71936C4.8601 4.57863 5.05097 4.49957 5.24999 4.49957C5.44901 4.49957 5.63988 4.57863 5.78061 4.71936L12 10.9397L18.2194 4.71936C18.3601 4.57863 18.551 4.49957 18.75 4.49957C18.949 4.49957 19.1399 4.57863 19.2806 4.71936C19.4213 4.8601 19.5004 5.05097 19.5004 5.24999C19.5004 5.44901 19.4213 5.63988 19.2806 5.78061L13.0603 12L19.2806 18.2194Z");
        const darkGrey = getComputedStyle(document.documentElement).getPropertyValue("--dark-grey").trim();
        path.setAttribute("fill", darkGrey);
        svg.append(path);
        cancelBtn.append(svg);
        btnContainer.append(submitBtn, cancelBtn);
        dueToContainer.append(dueTo);
        inputsContainer.append(titleInput, dueToContainer);
        todoDiv.append(checkbox, inputsContainer, btnContainer);
        todoContainer.prepend(todoDiv);
        titleInput.focus();
        submitBtn.addEventListener("click", () => {
            handleAddPressTodo(titleInput, dueTo, activeProject);
        })
        cancelBtn.addEventListener("click", handleCancelBtn)
        todoDiv.addEventListener("keyup", (event) => {
            handleKeyPressTodo(event, titleInput, dueTo, activeProject);
        });
    }
}

function handleKeyPressTodo(event, titleInput, dueTo, activeProject) {
    if (event.key === "Enter" && titleInput.value.trim()) {
        addTodo(titleInput.value, dueTo.value, activeProject.name);
        renderFilteredTodos();
    } else if (event.key === "Escape") {
        event.currentTarget.remove();
    }
}

function handleAddPressTodo(titleInput, dueTo, activeProject) {
    if (titleInput.value.trim()) {
        addTodo(titleInput.value, dueTo.value, activeProject.name);
        changeFilterToAll();
    }
}

function handleCancelBtn() {
    const div = document.querySelector(".new-todo-div");
    div.remove();
    renderTodos();
}

export function handleAddProject() {
    const projectsContainer = document.querySelector(".projects-container");
    if (!projectsContainer.querySelector(".new-project-div")) {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("new-project-div");
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
        input.addEventListener("keyup", handleKeyPressProject);
        input.addEventListener("blur", handleBlurProject);
    }
}

function handleKeyPressProject(event) {
    if (event.key == "Enter" && event.target.value.trim()) {
        addProject(event.target.value);
        renderProjectsButtons();
    } else if (event.key == "Escape") {
        event.target.closest(".new-project-div").remove();
    }
}

function handleBlurProject(event) {
    if (!event.target.value.trim()) {
        event.target.closest(".new-project-div").remove();
    }
}

export function renderTodos() {
    const todoContainer = document.querySelector(".todo-container");
    todoContainer.innerHTML = "";
    getFilteredTodos().forEach((todo) => {
        const div = document.createElement("div");
        div.classList.add("todo");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        const textContainer = document.createElement("div");
        textContainer.classList.add("text-container");
        const span = document.createElement("span");
        span.classList.add("task-title");
        span.textContent = todo.title;
        const date = document.createElement("span");
        date.classList.add("date");
        date.textContent = todo.dueTo ? format(todo.dueTo, "dd.MM.yyy") : null;
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "18");
        svg.setAttribute("height", "18");
        svg.setAttribute("viewBox", "0 0 25 25");
        svg.classList.add("delete-icon");
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", "M20.3611 5.00793H16.6111V4.25793C16.6111 3.6612 16.3741 3.0889 15.9521 2.66694C15.5301 2.24499 14.9579 2.00793 14.3611 2.00793H9.86111C9.26438 2.00793 8.69208 2.24499 8.27012 2.66694C7.84817 3.0889 7.61111 3.6612 7.61111 4.25793V5.00793H3.86111C3.6622 5.00793 3.47144 5.08695 3.33078 5.2276C3.19013 5.36826 3.11111 5.55902 3.11111 5.75793C3.11111 5.95685 3.19013 6.14761 3.33078 6.28826C3.47144 6.42892 3.6622 6.50793 3.86111 6.50793H4.61111V20.0079C4.61111 20.4058 4.76915 20.7873 5.05045 21.0686C5.33176 21.3499 5.71329 21.5079 6.11111 21.5079H18.1111C18.5089 21.5079 18.8905 21.3499 19.1718 21.0686C19.4531 20.7873 19.6111 20.4058 19.6111 20.0079V6.50793H20.3611C20.56 6.50793 20.7508 6.42892 20.8914 6.28826C21.0321 6.14761 21.1111 5.95685 21.1111 5.75793C21.1111 5.55902 21.0321 5.36826 20.8914 5.2276C20.7508 5.08695 20.56 5.00793 20.3611 5.00793ZM9.11111 4.25793C9.11111 4.05902 9.19013 3.86826 9.33078 3.7276C9.47144 3.58695 9.6622 3.50793 9.86111 3.50793H14.3611C14.56 3.50793 14.7508 3.58695 14.8914 3.7276C15.0321 3.86826 15.1111 4.05902 15.1111 4.25793V5.00793H9.11111V4.25793ZM18.1111 20.0079H6.11111V6.50793H18.1111V20.0079ZM10.6111 10.2579V16.2579C10.6111 16.4568 10.5321 16.6476 10.3914 16.7883C10.2508 16.9289 10.06 17.0079 9.86111 17.0079C9.6622 17.0079 9.47144 16.9289 9.33078 16.7883C9.19013 16.6476 9.11111 16.4568 9.11111 16.2579V10.2579C9.11111 10.059 9.19013 9.86826 9.33078 9.7276C9.47144 9.58695 9.6622 9.50793 9.86111 9.50793C10.06 9.50793 10.2508 9.58695 10.3914 9.7276C10.5321 9.86826 10.6111 10.059 10.6111 10.2579ZM15.1111 10.2579V16.2579C15.1111 16.4568 15.0321 16.6476 14.8914 16.7883C14.7508 16.9289 14.56 17.0079 14.3611 17.0079C14.1622 17.0079 13.9714 16.9289 13.8308 16.7883C13.6901 16.6476 13.6111 16.4568 13.6111 16.2579V10.2579C13.6111 10.059 13.6901 9.86826 13.8308 9.7276C13.9714 9.58695 14.1622 9.50793 14.3611 9.50793C14.56 9.50793 14.7508 9.58695 14.8914 9.7276C15.0321 9.86826 15.1111 10.059 15.1111 10.2579Z")
        const grey = getComputedStyle(document.documentElement).getPropertyValue("--grey").trim();
        path.setAttribute("fill", grey);
        svg.append(path);
        deleteBtn.append(svg);
        textContainer.append(span, date);
        div.append(checkbox, textContainer, deleteBtn);
        todoContainer.append(div);
        checkbox.addEventListener("click", () => {
            toggleComplete(span.textContent);
            setTimeout(renderFilteredTodos, 600);
        });
        deleteBtn.addEventListener("click", () => {
            deleteTodo(span.textContent);
            renderFilteredTodos();
        });
    })
}


function changeActiveProject(event) {
    setActiveProject(event.currentTarget.id);
}

export function setHeader() {
    const header = document.querySelector(".header-project-name");
    const projectName = getActiveProject().name.toUpperCase();
    header.textContent = projectName;
}

export function renderFilteredTodos() {
    const activeFilter = document.querySelector(".filter.active");
    if (activeFilter.id === "all-filter-btn") {
        filterAll();
        renderTodos();
    }
    if (activeFilter.id === "today-filter-btn") {
        filterToday();
        renderTodos();
    }
    if (activeFilter.id === "completed-filter-btn") {
        filterCompleted();
        renderTodos();
    }
}

export function changeActiveFilter(event) {
    const filterBtns = document.querySelectorAll(".filter");
    filterBtns.forEach(btn => btn.classList.remove("active"));
    event.currentTarget.classList.add("active");
    renderFilteredTodos();
}

export function changeFilterToAll() {
    const filterBtns = document.querySelectorAll(".filter");
    filterBtns.forEach(btn => btn.classList.remove("active"));
    const filterAllBtn = document.querySelector("#all-filter-btn");
    filterAllBtn.classList.add("active");
    renderFilteredTodos();
}
