"use strict";
import Project from "./project";
import project1 from "./seed-data";
import TaskItem from "./task-item";

const updateStorage = function (project) {
  let projectList = getStorage();

  const index = projectList.findIndex((p) => p.getId() === project.id);

  //checking if project already exists in storage if so remove it
  if (index !== -1) {
    projectList[index] = project;
  } else {
    projectList.push(project);
  }
  //re-adding updated project back to storage
  localStorage.setItem("projects", JSON.stringify(projectList));
};

const getStorage = function () {
  //turn back into list of objects
  let projectList = [];
  const projects = JSON.parse(localStorage.getItem("projects"));
  if (projects) {
    projects.forEach((project) => {
      let projectTasks = [];
      project.tasks.forEach((task) => {
        const newTask = new TaskItem(
          task.title,
          task.description,
          task.duedate,
          task.priority,
          task.notes,
          task.finished
        );
        newTask.setId(task.id);
        projectTasks.push(newTask);
      });
      const newProject = new Project(project.title, projectTasks);
      newProject.setId(project.id);
      projectList.push(newProject);
    });
  }
  //setProjectList(newProjectList);
  return projectList;
};

//run initial data can only run first time
const seedData = function () {
  if (getStorage().length === 0) {
    const templist = [project1];
    localStorage.setItem("projects", JSON.stringify(templist));
  }
};

export { updateStorage, getStorage, seedData };
