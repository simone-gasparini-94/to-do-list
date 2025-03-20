import { format } from "date-fns";

const projects = [];
let activeProject = null;
let filteredTodos = null;

class Project {
    constructor(name){
        this.name = name;
        this.list = [];

        projects.push(this);
    }
}

class Todo {
    constructor(title, dueTo, projectName, completed) {
        this.title = title;
        this.dueTo = dueTo ? new Date(dueTo) : null;
        this.project = projectName;
        this.completed = completed;

        projects.forEach((project) => {
            if(projectName === project.name) {
                project.list.push(this);
                project.list.sort((a, b) => a.dueTo - b.dueTo);
            }
        })
    }
}

export function addTodo(title, dueTo, projectName, completed) {
    new Todo(title, dueTo, projectName, completed);
    saveToLocalStorage();
}

export function deleteTodo(title) {
    let index = activeProject.list.findIndex((todo) => todo.title === title);
    activeProject.list.splice(index, 1);
    saveToLocalStorage();
}

export function toggleComplete(title) {
    let todo = activeProject.list.find((todo) => todo.title === title);
    if (todo.completed === false) {
        todo.completed = true;
    } else {
        todo.completed = false;
    }
    saveToLocalStorage();
}

export function getProjects() {
    return projects;
}

export function getActiveProject() {
    return activeProject;
}

export function setActiveProject(projectName) {
    activeProject = projects.find((project) => project.name === projectName);
}

export function getFilteredTodos() {
    return filteredTodos;
}

export function addProject(project) {
    new Project(project);
    saveToLocalStorage();
}

export function removeProject(projectName) {
    const projects = getProjects();
    let index = projects.findIndex((project) => project.name === projectName);
    projects.splice(index, 1);
    saveToLocalStorage();
}

export function filterAll() {
    if (activeProject) {
        filteredTodos = activeProject.list.filter(todo => todo.completed === false);
    }
}

export function filterToday() {
    const today = format(new Date(), "dd.MM.yyyy");
    if (activeProject) {
        filteredTodos = activeProject.list.filter(todo => todo.completed === false).filter(todo => format(todo.dueTo, "dd.MM.yyyy") === today);
    }
}


export function filterCompleted() {
    if (activeProject) {
        filteredTodos = activeProject.list.filter(todo => todo.completed === true);
    }
}

export function createInitialProjects() {
    new Project("personal");
    new Project("work");
    new Project("home");
    new Project("shopping");
}

export function createInitialTodos() {
    new Todo("read a book", "2025-04-01", "personal", false);
    new Todo("study german", "2025-04-20", "personal", false);
    new Todo("go for a walk", "2025-03-19", "personal", false);
    new Todo("schedule meeting", "2025-03-20", "work", false);
    new Todo("clean kitchen", "2025-03-18", "home", false);
    new Todo("buy bread", "2025-03-17", "shopping", false);
}

export function saveToLocalStorage() {
    const projects = getProjects();
    
    const data = {
        projects: projects,
    };

    localStorage.setItem('todoAppData', JSON.stringify(data));
}

export function init() {
    const savedData = localStorage.getItem('todoAppData');
    if (savedData) {
        const data = JSON.parse(savedData);
        if (data.projects && data.projects.length > 0) {
            data.projects.forEach((projectData) => {
                const project = new Project(projectData.name);
                projectData.list.forEach((todoData) => {
                    new Todo(todoData.title, todoData.dueTo, project.name, todoData.completed); // Add saved todos to projects
                });
            });
        } else {
            createInitialProjects();
            createInitialTodos();
        }
    } else {
        createInitialProjects();
        createInitialTodos();
    }
    const projects = getProjects();
    setActiveProject(projects[0].name);
}