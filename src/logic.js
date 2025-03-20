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
    constructor(title, dueTo, projectName) {
        this.title = title;
        this.dueTo = new Date(dueTo);
        this.project = projectName;
        this.completed = false;

        projects.forEach((project) => {
            if(projectName === project.name) {
                project.list.push(this);
                project.list.sort((a, b) => a.dueTo - b.dueTo);
            }
        })
    }
}

export function addTodo(title, dueTo, projectName) {
    new Todo(title, dueTo, projectName);
}

export function deleteTodo(title) {
    let indexToRemove = activeProject.list.findIndex((todo) => todo.title === title);
    activeProject.list.splice(indexToRemove, 1);
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
}

export function filterAll() {
    filteredTodos = activeProject.list.filter(todo => todo.completed === false);
}

export function filterToday() {
    const today = new Date().toISOString().slice(0, 10);
    filteredTodos = activeProject.list.filter(todo => todo.completed === false).filter(todo => todo.dueTo === today);
}

export function filterCompleted() {
    filteredTodos = activeProject.list.filter(todo => todo.completed === true);
    console.log(filteredTodos);
}

function createInitialProjects() {
    new Project("personal");
    new Project("work");
    new Project("home");
    new Project("shopping");
}

function createInitialTodos() {
    new Todo("read a book", "2025-04-01", "personal");
    new Todo("study german", "2025-04-20", "personal");
    new Todo("go for a walk", "2025-03-19", "personal")
    new Todo("schedule meeting", "2025-03-20", "work");
    new Todo("clean kitchen", "2025-03-18", "home");
    new Todo("buy bread", "2025-03-17", "shopping");
}

function init() {
    createInitialProjects();
    createInitialTodos();
    setActiveProject("personal");
}

init();