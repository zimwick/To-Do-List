"use strict";

export default class TaskItem {
  #id = crypto.randomUUID();
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #finished = false;

  constructor(tile, description, duedate, priority, notes) {
    this.#title = tile;
    this.#description = description;
    this.#dueDate = duedate;
    this.#priority = priority;
    this.#notes = notes ?? "";
  }

  getId() {
    return this.#id;
  }

  getTitle() {
    return this.#title;
  }

  setTitle(title) {
    this.#title = title;
  }

  getDescription() {
    return this.#description;
  }

  setDescription(description) {
    this.#description = description;
  }

  getDueDate() {
    //create date logic somewhere here
    return this.#dueDate;
  }

  setDueDate(date) {
    this.#dueDate = date;
  }

  getPriority() {
    return this.#priority;
  }

  setPriority(priority) {
    this.#priority = priority;
  }

  getNotes() {
    return this.#notes;
  }

  setNotes(notes) {
    this.#notes = notes;
  }

  getFinished() {
    return this.#finished;
  }

  setFinished() {
    this.#finished = true;
  }
}
