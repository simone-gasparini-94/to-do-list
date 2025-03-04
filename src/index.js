import "./styles/styles.css";
import { toDoList, addToDo, removeToDo } from "./todo.js";

addToDo("clean", "clean the toilet", "tomorrow", "yes");
addToDo("groceries", "buy toothpaste", "tomorrow", "yes");

toDoList.forEach(item =>
    console.log(item)
);

removeToDo("clean");

toDoList.forEach(item =>
    console.log(item)
);
