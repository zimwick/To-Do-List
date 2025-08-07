"use strict";
import projectList from "./project-list";

const updateStorage = function () {
  localStorage.setItem("projects", JSON.stringify(projectList));
  console.log(JSON.parse(localStorage.getItem("projects")));
};

const getStorage = function () {
  return JSON.parse(localStorage.getItem("projects"));
};

export { updateStorage, getStorage };
