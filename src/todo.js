const todoList = [];
const completedList = [];
const projectList = [];

class Todo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.completed = false;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.list = [];
    }
}

function createInitialProjects() {
    const personal = new Project("personal");
    const work = new Project("work");
    projectList.push(personal, work);
}

export function logTodoList() {
    console.log("todo list:");
    console.log(todoList);
}

export function logCompletedList() {
    console.log("completed list:");
    console.log(completedList);
}

export function logProjectList() {
    console.log("project list:");
    console.log(projectList);
}

export function addTodo(title, description, dueDate, priority, project) {
    const todo = new Todo(title, description, dueDate, priority, project);
    todoList.push(todo);
    if (project) addToProjects(todo);
}

export function removeTodo(index) {
    todoList.splice(index, 1);
}

export function toggleComplete(index) {
    const completed = todoList.splice(index, 1);
    completed.completed = !completed.completed;
    completedList.push(completed);
}

function addToProjects(todo) {
    const targetProject = projectList.find(project => project.name === todo.project);
    if (!targetProject) addProject(todo);
    if (targetProject) targetProject.list.push();
}

function addProject(todo) {
    const project = new Project(todo.project);
    project.list.push(todo);
    projectList.push(project);
}

createInitialProjects();
