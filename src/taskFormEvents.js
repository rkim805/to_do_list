import { projectList } from "./storage";

const addTaskEvent = () => {
  const app = document.querySelector("#list-app");
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.style.display = "none";

  const form = createTaskForm();
  app.append(form);
}

const createTaskForm = () => {
  const form = document.createElement("form");
  form.id = "add-task-form";

  addTaskFormInputs(form);
  addProjectSelector(form);
  addPrioritySelector(form);
  addTaskFormButtons(form);
  return form;
}

const addTaskFormInputs = (inputlessForm) => {
  const title = hiddenLabelInput("text", "title-input", "Title");
  const description = hiddenLabelInput("text", "description-input", 
  "Description");

  //const descriptionInput = document.createElement("label");
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = "description-input";
  descriptionInput.placeholder = "Description";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "date-input";

  inputlessForm.append(title.label);
  inputlessForm.append(title.input);
  inputlessForm.append(description.label);
  inputlessForm.append(description.input);
  inputlessForm.append(dateInput);
}

const hiddenLabelInput = (inputType, id, placeholder="") => {
  const label = document.createElement("label");
  label.hidden = true;
  label.for = id;
  const input = document.createElement("input");
  input.type = inputType;
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  return {label, input};
}

const addPrioritySelector = (form) => {
  const prioritySelector = document.createElement("select");
  prioritySelector.name = "priority";
  prioritySelector.id = "priority-selector";

  const PRIORITY_MAX = 4;
  for(let i = 1; i <= PRIORITY_MAX; i++) {
    const priorityOption = document.createElement("option");
    priorityOption.value = `Priority ${i}`;
    priorityOption.innerText = `Priority ${i}`;
    prioritySelector.append(priorityOption);
  }
  form.append(prioritySelector);
}

const addProjectSelector = (form) => {
  const projectSelector = document.createElement("select");
  projectSelector.name = "project";
  projectSelector.id = "project-selector";

  const inboxOption = document.createElement("option");
  inboxOption.value = "inbox";
  inboxOption.innerText = "Inbox";

  projectSelector.append(inboxOption);

  for(const project of projectList) {
    let projectOption = document.createElement("option");
    projectOption.value = project.title;
    projectOption.innerText = project.title;
    projectSelector.append(projectOption);
  }
  
  form.append(projectSelector);
}

const addTaskFormButtons = (btnlessForm) => {
  const confirmAddBtn = document.createElement("button");
  confirmAddBtn.type = "button";
  confirmAddBtn.innerText = "Add Task";
  confirmAddBtn.id = "confirm-add-btn";

  const cancelAddBtn = document.createElement("button");
  cancelAddBtn.type = "button";
  cancelAddBtn.innerText = "Cancel";
  cancelAddBtn.id = "cancel-add-btn";

  btnlessForm.append(confirmAddBtn);
  btnlessForm.append(cancelAddBtn);
}

const dynamicFormEvent = (e) => {
  if(e.target && e.target.id === "confirm-add-btn") {
    confirmAddEvent();
  }
  else if(e.target && e.target.id === "cancel-add-btn"){
    cancelAddEvent();
  }
}

const confirmAddEvent = () => {
  removeForm();

  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.style.display = "block";
}

const cancelAddEvent = () => {
  removeForm();
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.style.display = "block";
}

const removeForm = () => {
  const form = document.querySelector("#add-task-form");
  while(form && form.firstChild) {
    form.removeChild(form.lastChild);
  }
  form.parentNode.removeChild(form);
}

export {
  addTaskEvent, dynamicFormEvent
}