"use strict";
import DOMMapper from "./dom-mapper";
import addTaskView from "./add-task-view";
import TaskItem from "./task-item";
import displayController from "./display-controller";
import { getStorage, updateStorage } from "./storage-controller";
import addProjectView from "./add-project-view";
import Project from "./project";

const initialEventListener = function () {
  DOMMapper.newProjectBtn.addEventListener("click", function () {
    DOMMapper.projectsContainer.appendChild(addProjectView());

    DOMMapper.addProjectForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const form = e.target;
      const projectName = form.elements.projectname.value;
      const project = new Project(projectName);

      DOMMapper.addProjectForm.remove();

      updateStorage(project.toJSON());
      displayController();
    });
  });
};

const inputController = function () {
  //parse through every project and add event listeners
  DOMMapper.projects.forEach((project) => {
    const projectId = project.dataset.projectId;

    //select current project object
    const projectSelected = getStorage().find(
      (project) => project.getId() === projectId
    );

    // add click events to add task buttons
    project
      .querySelector(".add-task-btn")
      .addEventListener("click", function () {
        project.appendChild(addTaskView(projectId));

        DOMMapper.addTaskForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const form = e.target;
          const taskName = form.elements.taskname.value;
          const taskDate = form.elements.duedate.value;
          const taskPriority = form.elements.priority.value;
          const taskDescription = form.elements.taskdescript.value;
          const taskNotes = form.elements.tasknotes.value;

          const task = new TaskItem(
            taskName,
            taskDescription,
            taskDate,
            taskPriority,
            taskNotes
          );
          DOMMapper.addTaskForm.remove();

          //add task to project
          projectSelected.createTaskItem(task);

          //save new data and update DOM
          updateStorage(projectSelected.toJSON());
          displayController();
        });
      });

    // add click events to each task delete button
    project.querySelectorAll(".task-container").forEach((task) => {
      const taskSelected = projectSelected.getTaskItem(task.dataset.taskId);

      task
        .querySelector(".del-task-btn")
        .addEventListener("click", function () {
          projectSelected.deleteTodoItem(taskSelected.getId());

          //save new data and update DOM
          updateStorage(projectSelected.toJSON());
          displayController();
        });

      task
        .querySelector(".complete-checkbox")
        .addEventListener("click", function () {
          taskSelected.toggleFinished();

          //save new data and update DOM
          updateStorage(projectSelected.toJSON());
          displayController();
        });
    });
  });
};

export { inputController, initialEventListener };
