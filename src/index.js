import {getDate, isToday} from "date-fns";
import { projectList } from "./storage";

window.onload = () => {
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.addEventListener("click", addTaskEvent);
  document.addEventListener("click", dynamicFormEvent);
};

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
  addTaskFormButtons(form);
  return form;
}

const addTaskFormInputs = (inputlessForm) => {
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title-input";
  titleInput.placeholder = "Title";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = "description-input";
  descriptionInput.placeholder = "Description";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "date-input";

  inputlessForm.append(titleInput);
  inputlessForm.append(descriptionInput);
  inputlessForm.append(dateInput);
}

const projectSelector = (form) => {
  const selector = document.createElement("select");
  selector.name = "project";
  selector.id = "project-selector";
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