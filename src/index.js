"use strict";
import "./style.css";
import Project from "./project.js";
import TodoItem from "./todo-item.js";

const task1 = new TodoItem("Clean Bird House");
const task2 = new TodoItem("Take out Trash");
const task3 = new TodoItem("Do Laundry");
const project1 = new Project("House Chores", [task1, task2, task3]);
project1.deleteTodoItem(task3.getId());
project1.createTodoItem(task3);
console.log(project1.getTodoItem(task3.getId()));
