const taskView = function (
  title,
  id,
  description,
  dueDate,
  priority,
  notes,
  finished
) {
  const li = document.createElement("li");
  li.classList.add("task-container");
  li.dataset.taskId = id;

  li.innerHTML = `
        <input type="checkbox" id="${id}" ${finished ? "checked" : ""} />
        <label for="${id}">
          <p class="task-title">${title}</p>

          <p class="due-date">
            <strong>Due:</strong>
            <time datetime="2023-05-10">${dueDate}</time>
          </p>
        </label>
        <p class="priority">
          <strong>Priority:</strong> ${priority}
        </p>

        <p class="task-desc">
          ${description}
        </p>

        <p class="notes">
          <strong>Notes:</strong> ${notes}
        </p>

        <button class="del-task-btn">Delete</button>
  `;
  return li;
};

export default taskView;
