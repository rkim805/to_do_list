import { formatRelative } from "date-fns";
import {storeProject, removeProjectData} from "./storage";

const openModal = () => {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

const closeModal = () => {
  const modal = document.querySelector(".modal");
  const projectName = document.querySelector("#project-name");
  const projectColor = document.querySelector("#project-color");

  //reset default from values upon modal form closing
  projectName.value = "";
  projectColor.value = "#808080";
  modal.style.display = "none";
}

const addProject = () => {
  const projectName = document.querySelector("#project-name");
  if(!projectName.value) {
    alert("Please enter a project name!");
  }
  else {
    const projectColor = document.querySelector("#project-color");
    const id = storeProject(projectName.value, projectColor.value);
    displayNewProject(projectName.value, id, projectColor.value);
  }
}

const displayNewProject = (projectName, projectID, projectColor) => {
  const projectList = document.querySelector("#project-list");
  const newProjectItem = document.createElement("li");
  const projectInfo = document.createElement("span");
  newProjectItem.setAttribute("data-id", projectID);
  projectInfo.innerText = projectName + " ";
  projectInfo.classList.add("project-info");
  newProjectItem.append(projectInfo);

  const colorIcon = createColorIcon(projectColor);
  newProjectItem.prepend(colorIcon);
  const editIcon = createEditIcon();
  newProjectItem.append(editIcon);
  const deleteIcon = createDeleteIcon();
  newProjectItem.append(deleteIcon);

  projectList.appendChild(newProjectItem);
  closeModal();
}

const dynamicProjectFormEvent = (e) => {
  //check e.target.parentNode as icon element is covered by SVG element
  if(e.target && e.target.parentNode.classList.contains("delete-icon")) {
    //get project ID belonging to the delete icon's project
    const id = e.target.parentNode.parentNode.dataset.id;
    deleteProjectDisplay(id);
  }
  else if(e.target && e.target.classList.contains("edit-icon")) {
    //get project ID belonging to the edit icon's project
    const id = e.target.parentNode.parentNode.dataset.id;
  }
}

const deleteProjectDisplay = (projectID) => {
  const listElement = document.querySelector(`[data-id="${projectID}"]`);
  listElement.remove();
}

const updateProjectDisplay = () => {
  openModal();
}

const createColorIcon = (iconColor) => {
  const colorIcon = document.createElement("i");
  colorIcon.classList.add("fa", "fa-circle", "project-icon");
  colorIcon.classList.add("fa-circle");
  colorIcon.classList.add("project-icon");
  colorIcon.style.color = iconColor;
  return colorIcon;
}

const createEditIcon = () => {
  const editIcon = document.createElement("i");
  editIcon.classList.add("fa", "fa-edit", "edit-icon");
  return editIcon;
}

const createDeleteIcon = () => {
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-trash", "delete-icon");
  return deleteIcon;
}

const handleColorChange = () => {
  const colorWrapper = document.querySelector(".color-wrapper");
  const colorPicker = document.querySelector("#project-color");
  colorWrapper.style.backgroundColor = colorPicker.value;
}

export {openModal, addProject, closeModal, handleColorChange, 
  dynamicProjectFormEvent};