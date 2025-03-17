export const projectsList = [];

export class Project {
    constructor(name) {
        this.name = name;
        this.list = [];

        projectsList.push(this)
    }
}

export class Todo {
    constructor(name, dueTo, priority, projectName) {
        this.name = name;
        this.dueTo = dueTo;
        this.priority = priority;
        this.project = projectName;

        const targetProject = projectsList.find(project => project.name === projectName);
        targetProject.list.push(this);
    }
}

function createInitialProjects () {
    new Project("personal");
    new Project("work");
}

function createInitialTodos () {
    new Todo("Buy Groceries", "2025-04-01", "high", "personal");
    new Todo("Kiss Meggo", null, null, "personal");
    new Todo("Learn JavaScript", null, "high", "work");
}

function init() {
    createInitialProjects();
    createInitialTodos();
}

init();