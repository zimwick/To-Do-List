"use strict";

export default class TodoItem {
  #id = crypto.randomUUID();
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;

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
}
