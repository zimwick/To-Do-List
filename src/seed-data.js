"use strict";
import Project from "./project.js";
import TaskItem from "./task-item.js";

const task1 = new TaskItem(
  "Clean Bird House",
  "grab the paper towels and cleaning agent and scrub the cages",
  "2025-05-15",
  "Medium",
  "watch out for atlas, he bites"
);
const task2 = new TaskItem(
  "Take out Trash",
  "trash needs brought to the curb for garbage man to take",
  "2026-05-16",
  "High"
);
const task3 = new TaskItem(
  "Do Laundry",
  "wash all laundry including baby clothes",
  "2026-05-16",
  "Low",
  "baby clothes sometimes have poop, handle with care"
);
const project1 = new Project("House Chores", [task1, task2, task3]);

export default project1;
