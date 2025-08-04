const addTaskView = function (projectId) {
  const div = document.createElement("div");
  div.classList.add("create-task-container");

  div.innerHTML = `
    <form class="add-task-form" data-project-id="${projectId}">
        <label for="taskname">Task name:</label>
        <input type="text" id="taskname" name="taskname" />
        <label for="duedate">Due date:</label>
        <input type="date" id="duedate" name="duedate" />
        <label for="priority">Priority:</label>
        <select name="priority" id="priority">
            <option value="High">High</option>
            <option value="Medium" selected>Medium</option>
            <option value="Low">Low</option>
        </select>
        <label for="taskdescript">Task description:</label>
        <input type="text" id="taskdescript" name="taskdescript" />
        <label for="tasknotes">Task notes:</label>
        <input type="text" id="task-notes" name="tasknotes" />
        <input type="submit" dataproject-id="${projectId}" value="save" />
    </form>
  `;
  return div;
};

export default addTaskView;
