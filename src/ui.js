export function addTodoContainer() {
    const todoContainer = document.querySelector(".task-container");
    const newTodo = document.createElement("div");
    newTodo.classList.add("todo");

    const content = document.createElement("div");
    content.classList.add("content-container");

    const title = document.createElement("input");
    title.type = "text";
    title.required = true;

    content.appendChild(title)
    newTodo.appendChild(content);
    todoContainer.appendChild(newTodo);
    console.log("add todo")
}