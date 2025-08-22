"use strict";

const projectView = function (title, id) {
  const li = document.createElement("li");
  li.classList.add("project-container");
  li.dataset.projectId = id;

  li.innerHTML = `
    <h3 class="project-title">${title}</h3>
    <button class="del-proj-btn">Delete Project</button>
    <ol class="project-tasks-list"></ol>
    <button class="add-task-btn">Add task</button>
  `;

  return li;
};

export default projectView;
