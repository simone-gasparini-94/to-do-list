export function addTodoContainer() {
    const todoContainer = document.querySelector(".task-container");
    const newTodo = document.createElement("div");
    newTodo.classList.add("todo");
    todoContainer.appendChild(newTodo);
    console.log("add todo")
}