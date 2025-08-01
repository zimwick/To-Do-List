const taskView = function (
  title,
  id,
  description,
  dueDate,
  priority,
  notes,
  finished
) {
  const html = `
    <li class="task-container" data-id="${id}">
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
    </li>
  `;
  return html;
};

export default taskView;
