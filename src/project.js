"using strict";

export default class Project {
  #id = crypto.randomUUID();
  #title;
  #todos;
  constructor(title, todos) {
    this.#title = title;
    this.#todos = todos ?? [];
  }

  getTitle() {
    return this.#title;
  }

  getTodos() {
    return this.#todos;
  }

  getTodoItem(todoId) {
    const item = this.#todos.find((todoItem) => todoItem.getId() === todoId);
    if (!item) {
      console.warn("Todo item not found");
    }
    return item;
  }

  deleteTodoItem(todoId) {
    const item = this.getTodoItem(todoId);
    if (item) {
      const index = this.#todos.indexOf(item);
      if (index !== -1) {
        this.#todos.splice(index, 1);
      }
    }
  }
}
