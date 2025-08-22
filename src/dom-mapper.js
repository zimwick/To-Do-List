"use strict";

const DOMMapper = {
  get projectsList() {
    return document.querySelector(".projects-list");
  },

  get projects() {
    return document.querySelectorAll(".project-container");
  },

  get projectsContainer() {
    return document.querySelector(".projects-container");
  },

  delProjBtn(project) {
    return project.querySelector(".del-proj-btn");
  },

  addTaskBtn(project) {
    return project.querySelector(".add-task-btn");
  },

  taskContainer(project) {
    return project.querySelectorAll(".task-container");
  },

  delTaskBtn(task) {
    return task.querySelector(".del-task-btn");
  },

  taskCheckBox(task) {
    return task.querySelector(".complete-checkbox");
  },

  project(projectId) {
    return document.querySelector(`[data-project-id="${projectId}"]`);
  },

  tasksList(projectId) {
    const project = this.project(projectId);
    return project.querySelector("ol");
  },

  get addTaskForm() {
    return document.querySelector(".add-task-form");
  },

  get addProjectForm() {
    return document.querySelector(".create-project-form");
  },

  get newProjectBtn() {
    return document.querySelector(".new-project-btn");
  },
};

export default DOMMapper;
