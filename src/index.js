import "./styles/styles.css";
import { displayToDoList, addToDo, removeToDo, toggleComplete, sortByDate } from "./todo.js";

addToDo("clean", "clean the toilet", "2025-03-08", "yes");
addToDo("groceries", "buy toothpaste", "2025-03-05", "yes");
addToDo("study", "study javascript", "2025-03-07", "yes");

toggleComplete("study");

sortByDate();

displayToDoList();