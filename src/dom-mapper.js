"use strict";

const DOMMapper = {
  get projectsList() {
    return document.querySelector(".projects-list");
  },

  tasksList(projectId) {
    const project = document.querySelector(`[data-project-id="${projectId}"]`);
    return project.querySelector("ol");
  },

  task(taskId) {
    return document.querySelector(`[data-task-id="${taskId}"]`);
  },

  taskCheckBox(taskId) {
    return this.task(taskId).querySelector('input[type="checkbox"]');
  },
};

export default DOMMapper;
