"use strict";

const projectView = function (title, id) {
  const li = document.createElement("li");
  li.classList.add("project-container");
  li.dataset.projectId = id;

  li.innerHTML = `
    <h3 class="project-title">${title}</h3>
    <ol class="project-tasks-list"></ol>
    <button class="add-task-btn" data-project-id="${id}">Add task</button>
  `;

  return li;
};

export default projectView;
