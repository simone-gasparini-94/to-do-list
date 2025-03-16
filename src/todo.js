export const projectsList = [];

class Project {
    constructor(name) {
        this.name = name;
        this.list = [];
    }
}

function createInitialProjects () {
    const personal = new Project("personal");
    const work = new Project("work");
    projectsList.push(personal, work);
}

function init() {
    createInitialProjects();
}

init();