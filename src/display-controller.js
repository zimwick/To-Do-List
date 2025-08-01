"use strict";
import projectView from "./project-view";
import DOMMapper from "./dom-mapper";
import projectList from "./project-list";
import taskView from "./task-view";

const displayController = function () {
  projectList.forEach((project) => {
    DOMMapper.projectsList.innerHTML += projectView(
      project.getTitle(),
      project.getId()
    );
    project.getTasks().forEach((task) => {
      DOMMapper.tasksList(project.getId()).innerHTML += taskView(
        task.getTitle(),
        task.getId(),
        task.getDescription(),
        task.getDueDate(),
        task.getPriority(),
        task.getNotes(),
        task.getFinished()
      );
    });
  });
};
export default displayController;
