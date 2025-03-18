const projects = [];
let activeProject = null;

class Project {
    constructor(name){
        this.name = name;
        this.list = [];

        projects.push(this);
    }
}

class Todo {
    constructor(title, dueTo, priority, projectName) {
        this.title = title;
        this.dueTo = dueTo;
        this.priority = priority;
        this.project = projectName;

        projects.forEach((project) => {
            if(projectName === project.name) {
                project.list.push(this);
                project.list.sort((a, b) => new Date(a.dueTo) - new Date(b.dueTo));
            }
        })
    }
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

export function addProject(project) {
    new Project(project);
}

function createInitialProjects() {
    new Project("personal");
    new Project("work");
    new Project("home");
    new Project("shopping");
}

function createInitialTodos() {
    new Todo("read a book", "2025-04-01", "low", "personal");
    new Todo("study german", "2025-04-20", 'high', "personal");
    new Todo("go for a walk", "2025-03-19", "medium", "personal")
    new Todo("schedule meeting", "2025-03-20", "high", "work");
    new Todo("clean kitchen", "2025-03-18", "medium", "home");
    new Todo("buy bread", "2025-03-17", "high", "shopping");
}

function init() {
    createInitialProjects();
    createInitialTodos();
    setActiveProject("personal");
}

init();