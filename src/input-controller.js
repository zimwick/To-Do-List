"use strict";
import DOMMapper from "./dom-mapper";
import addTaskView from "./add-task-view";
import TaskItem from "./task-item";
import displayController from "./display-controller";
import { deleteProject, getStorage, updateStorage } from "./storage-controller";
import addProjectView from "./add-project-view";
import Project from "./project";

//should run once at first render
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

//runs on each re-render
const inputController = function () {
  //parse through every project and add event listeners
  DOMMapper.projects.forEach((project) => {
    const projectId = project.dataset.projectId;

    //select current project object
    const projectSelected = getStorage().find(
      (project) => project.getId() === projectId
    );

    function toggleEditTitle() {
      DOMMapper.projectTitle(project).classList.toggle("hide");
      DOMMapper.editProjContainer(project).classList.toggle("hide");
      DOMMapper.editProjBtn(project).classList.toggle("hide");
    }

    DOMMapper.editProjBtn(project).addEventListener("click", function () {
      toggleEditTitle();
      DOMMapper.projectTitleInput(project).value = projectSelected.getTitle();

      DOMMapper.saveProjBtn(project).addEventListener("click", function () {
        projectSelected.setTitle(DOMMapper.projectTitleInput(project).value);
        toggleEditTitle();

        updateStorage(projectSelected.toJSON());
        displayController();
      });
    });

    DOMMapper.delProjBtn(project).addEventListener("click", function () {
      deleteProject(projectSelected.toJSON());
      displayController();
    });

    // add click events to add task buttons
    DOMMapper.addTaskBtn(project).addEventListener("click", function () {
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

    // add click events to tasks
    DOMMapper.taskContainer(project).forEach((task) => {
      const taskSelected = projectSelected.getTaskItem(task.dataset.taskId);

      DOMMapper.delTaskBtn(task).addEventListener("click", function () {
        projectSelected.deleteTodoItem(taskSelected.getId());

        //save new data and update DOM
        updateStorage(projectSelected.toJSON());
        displayController();
      });

      DOMMapper.taskCheckBox(task).addEventListener("click", function () {
        taskSelected.toggleFinished();

        //save new data and update DOM
        updateStorage(projectSelected.toJSON());
        displayController();
      });
    });
  });
};

export { inputController, initialEventListener };
