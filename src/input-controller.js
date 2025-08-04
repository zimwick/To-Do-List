"use strict";
import DOMMapper from "./dom-mapper";
import addTaskView from "./add-task-view";

const inputController = function () {
  DOMMapper.addTaskBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      DOMMapper.project(btn.dataset.projectId).appendChild(
        addTaskView(btn.dataset.projectId)
      );

      DOMMapper.addTaskForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const form = e.target;
        taskName = form.elements.taskname.value;
        taskDesc = form.elements.taskdesc.value;
        taskDate = form.elements.duedate.value;

        const task = new Task(taskName);
        console.log(form.elements.taskname.value);
      });
    });
  });
};

export default inputController;
