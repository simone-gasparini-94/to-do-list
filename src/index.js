import "./styles/styles.css";
import { logTodoList, addTodo, removeTodo } from "./todo.js";

addTodo("study", "study JavaScript", "2025-03-10", "high", "work");
addTodo("study", "study JavaScript", "2025-03-10", "high", "work");
addTodo("study", "study JavaScript", "2025-03-10", "high", "work");

removeTodo(2);

logTodoList();
