"use strict";

export default class TaskItem {
  #id = crypto.randomUUID();
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;
  #finished;

  constructor(tile, description, duedate, priority, notes, finished = false) {
    this.#title = tile;
    this.#description = description;
    this.#dueDate = duedate;
    this.#priority = priority;
    this.#notes = notes ?? "";
    this.#finished = finished;
  }

  getId() {
    return this.#id;
  }

  setId(id) {
    this.#id = id;
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

  toggleFinished() {
    if (this.#finished === true) {
      this.#finished = false;
    } else {
      this.#finished = true;
    }
  }

  toJSON() {
    return {
      id: this.getId(),
      title: this.getTitle(),
      description: this.getDescription(),
      duedate: this.getDueDate(),
      priority: this.getPriority(),
      notes: this.getNotes(),
      finished: this.getFinished(),
    };
  }
}
