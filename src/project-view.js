"use strict";

const projectView = function (title, id) {
  const html = `
  <li class="project-container" data-id="${id}">
    <h3 class="project-title">${title}</h3>
    <ol class="project-tasks-list">

    </ol>
    <button class="add-task-btn">Add task</button>
  </li>
  `;
  return html;
};

export default projectView;
