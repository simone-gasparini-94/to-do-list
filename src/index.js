import "./styles/styles.css";
import { 
    logTodoList,
    logCompletedList,
    logProjectList,
    addTodo,
    removeTodo,
    toggleComplete
} from "./todo.js";

addTodo("study", "study JavaScript", "2025-03-10", "high", "work");
addTodo("study", "study JavaScript", "2025-03-10", "high", "work");
addTodo("study", "study JavaScript", "2025-03-10", "high", "work");

removeTodo(2);

logTodoList();

toggleComplete(1);

logCompletedList();