const addProjectView = function () {
  const div = document.createElement("div");
  div.classList.add("create-project-container");

  div.innerHTML = `
    <form class="create-project-form">
        <label for="projectname">Project name:</label>
        <input type="text" id="projectname" name="projectname" />
        <input type="submit" value="save" />
    </form>
  `;
  return div;
};

export default addProjectView;
