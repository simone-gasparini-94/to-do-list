let toDoList = [];

class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
}

export function displayToDoList() {
    toDoList.forEach(task => console.log(task));
}

export function addToDo(title, description, dueDate, priority) {
    const newTask = new ToDo(title, description, dueDate, priority);
    toDoList.push(newTask);
}

export function removeToDo(title) {
    toDoList = toDoList.filter(ToDo => ToDo.title !== title);
}

export function toggleComplete(title) {
    const task = toDoList.find((task) => task.title === title);
    if (task.completed === false) { 
        task.completed = true;
    } else if (task.completed === true) {
        task.completed = false;
    };
}

export function sortByDate() {
    toDoList.sort((task1, task2) => {
        const date1 = new Date(task1.dueDate);
        const date2 = new Date(task2.dueDate);

        return date1 - date2;
    });
}