"use strict";
import DOMMapper from "./dom-mapper";
import addTaskView from "./add-task-view";
import projectList from "./project-list";
import TaskItem from "./task-item";
import displayController from "./display-controller";

const inputController = function () {
  DOMMapper.addTaskBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      DOMMapper.project(btn.dataset.projectId).appendChild(
        addTaskView(btn.dataset.projectId)
      );

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

        //add task to project
        projectList
          .find(
            (project) =>
              project.getId() === DOMMapper.addTaskForm.dataset.projectId
          )
          .createTaskItem(task);

        //update dom
        displayController();
      });
    });
  });
};

export default inputController;
