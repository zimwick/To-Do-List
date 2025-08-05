"use strict";
import projectView from "./project-view";
import DOMMapper from "./dom-mapper";
import projectList from "./project-list";
import taskView from "./task-view";
import inputController from "./input-controller";

const displayController = function () {
  //clear dom so it can re-render for updates
  while (DOMMapper.projectsList.firstChild) {
    DOMMapper.projectsList.removeChild(DOMMapper.projectsList.firstChild);
  }

  //re-render dom
  projectList.forEach((project) => {
    DOMMapper.projectsList.appendChild(
      projectView(project.getTitle(), project.getId())
    );
    project.getTasks().forEach((task) => {
      DOMMapper.tasksList(project.getId()).appendChild(
        taskView(
          task.getTitle(),
          task.getId(),
          task.getDescription(),
          task.getDueDate(),
          task.getPriority(),
          task.getNotes(),
          task.getFinished()
        )
      );
    });
  });

  //remap event listeners
  inputController();
};
export default displayController;
