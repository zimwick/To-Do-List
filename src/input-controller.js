"use strict";
import DOMMapper from "./dom-mapper";
import addTaskView from "./add-task-view";
import TaskItem from "./task-item";
import displayController from "./display-controller";
import { getStorage, updateStorage } from "./storage-controller";

const inputController = function () {
  //clear dom so it can re-render for updates

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

        console.log(getStorage());
        //add task to project
        getStorage()
          .find(
            (project) =>
              project.getId() === DOMMapper.addTaskForm.dataset.projectId
          )
          .createTaskItem(task);

        //save new data and update DOM
        updateStorage();
        displayController();
      });
    });
  });
};

export default inputController;
