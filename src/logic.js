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
    constructor(title, dueTo, projectName) {
        this.title = title;
        this.dueTo = dueTo;
        this.project = projectName;

        projects.forEach((project) => {
            if(projectName === project.name) {
                project.list.push(this);
                project.list.sort((a, b) => new Date(a.dueTo) - new Date(b.dueTo));
            }
        })
    }
}

export function addTodo(title, dueTo, projectName) {
    const newTodo = new Todo(title, dueTo, projectName);
    console.log(newTodo);
}

//finish this function
export function deleteTodo(title) {
    console.log(activeProject);
    activeProject.list.find((todo) => todo.title === title)
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