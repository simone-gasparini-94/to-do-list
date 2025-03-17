export const projects = [];

export let activeProject = null;

class Project {
    constructor(name){
        this.name = name;
        this.list = [];

        projects.push(this);
    }
};

class Todo {
    constructor(title, dueTo, priority, projectName) {
        this.title = title;
        this.dueTo = dueTo;
        this.priority = priority;
        this.project = projectName;

        projects.forEach((project) => {
            if(projectName === project.name) {
                project.list.push(this);
            }
        })
    }
}

function createInitialProjects() {
    new Project("personal");
    new Project("work");
    new Project("home");
    new Project("shopping");
}

function createInitialTodos() {
    new Todo("read a book", "2025-04-01", "low", "personal");
    new Todo("schedule meeting", "2025-03-20", "high", "work");
    new Todo("clean kitchen", "2025-03-18", "medium", "home");
    new Todo("buy bread", "2025-03-17", "high", "shopping");
}

function init() {
    createInitialProjects();
    createInitialTodos();
}

init();