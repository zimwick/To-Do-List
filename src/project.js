"use strict";

export default class Project {
  #id = crypto.randomUUID();
  #title;
  #tasks;
  constructor(title, tasks = []) {
    this.#title = title;
    this.#tasks = tasks;
  }

  getTitle() {
    return this.#title;
  }

  setTitle(title) {
    this.#title = title;
  }

  getId() {
    return this.#id;
  }

  setId(id) {
    this.#id = id;
  }

  getTasks() {
    //also sets priority order
    const priorityOrder = {
      High: 3,
      Medium: 2,
      Low: 1,
    };

    return [...this.#tasks].sort(
      (a, b) => priorityOrder[b.getPriority()] - priorityOrder[a.getPriority()]
    );
  }

  getTaskItem(taskId) {
    const item = this.#tasks.find((taskItem) => taskItem.getId() === taskId);
    if (!item) {
      console.warn("Todo item not found");
    }
    return item;
  }

  deleteTodoItem(taskId) {
    const item = this.getTaskItem(taskId);
    if (item) {
      const index = this.#tasks.indexOf(item);
      if (index !== -1) {
        this.#tasks.splice(index, 1);
      }
    }
  }

  createTaskItem(taskItem) {
    this.#tasks.push(taskItem);
  }

  toJSON() {
    return {
      id: this.getId(),
      title: this.getTitle(),
      tasks: this.getTasks(),
    };
  }
}
