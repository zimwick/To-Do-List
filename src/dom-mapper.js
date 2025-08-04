"use strict";

const DOMMapper = {
  get projectsList() {
    return document.querySelector(".projects-list");
  },

  project(projectId) {
    return document.querySelector(`[data-project-id="${projectId}"]`);
  },

  tasksList(projectId) {
    const project = this.project(projectId);
    return project.querySelector("ol");
  },

  task(taskId) {
    return document.querySelector(`[data-task-id="${taskId}"]`);
  },

  taskCheckBox(taskId) {
    return this.task(taskId).querySelector('input[type="checkbox"]');
  },

  get addTaskBtns() {
    return document.querySelectorAll(".add-task-btn");
  },

  get addTaskForm() {
    return document.querySelector(".add-task-form");
  },
};

export default DOMMapper;
