export const toDoList = [];

class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

export function addToDo(title, description, dueDate, priority) {
    const newTask = new ToDo(title, description, dueDate, priority);
    toDoList.push(newTask);
}