export function addTodoContainer() {
    const todoContainer = document.querySelector(".task-container");
    const newTodo = document.createElement("div");
    newTodo.classList.add("todo");

    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Enter task...";
    title.required = true;

    newTodo.appendChild(title);
    todoContainer.appendChild(newTodo);
    console.log("add todo")
}