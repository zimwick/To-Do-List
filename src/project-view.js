"use strict";

const projectView = function (title, id) {
  const li = document.createElement("li");
  li.classList.add("project-container");
  li.dataset.projectId = id;

  li.innerHTML = `
    <h3 class="project-title">${title}</h3>
    <div class="hide edit-proj-container">
    <input type="text" class="projtitle" name="projtitle" />
    <button class="save-proj-btn">Save</button>
    </div>
    <button class="edit-proj-btn">Edit Project</button>
    <button class="del-proj-btn">Delete Project</button>
    <ol class="project-tasks-list"></ol>
    <button class="add-task-btn">Add task</button>
  `;

  return li;
};

export default projectView;
