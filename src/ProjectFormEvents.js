import { formatRelative } from "date-fns";
import {storeProject, removeProjectData} from "./storage";

const openModalAdd = () => {
  const editBtn = document.querySelector("#edit-project-btn");
  editBtn.style.display = "none";
  const addBtn = document.querySelector("#add-project-btn");
  addBtn.style.display = "inline-block";
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

const openModalEdit = (projectID) => {
  const editBtn = document.querySelector("#edit-project-btn");
  editBtn.style.display = "inline-block";
  const addBtn = document.querySelector("#add-project-btn");
  addBtn.style.display = "none";

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

  const editProjectBtn = document.querySelector("#edit-project-btn");
  editProjectBtn.removeEventListener("click", updateProjectDisplay);
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
  if(e.target && e.target.classList.contains("delete-icon-btn")) {
    //get project ID belonging to the delete icon's project
    const id = e.target.parentNode.dataset.id;
    deleteProjectDisplay(id);
  }
  else if(e.target && e.target.classList.contains("edit-icon-btn")) {
    //get project ID belonging to the edit icon's project
    const id = e.target.parentNode.dataset.id;
    openModalEdit(id);
  }
}

const deleteProjectDisplay = (projectID) => {
  const listElement = document.querySelector(`[data-id="${projectID}"]`);
  listElement.remove();
}

const updateProjectDisplay = (projectID) => {

}

const createColorIcon = (iconColor) => {
  const colorIcon = document.createElement("i");
  colorIcon.classList.add("fa", "fa-circle", "project-icon");
  colorIcon.style.color = iconColor;
  return colorIcon;
}

const createEditIcon = () => {
  const editIconBtn = document.createElement("button");
  editIconBtn.classList.add("edit-icon-btn");
  const editIcon = document.createElement("i");
  editIcon.classList.add("fa", "fa-edit", "edit-icon");
  editIconBtn.append(editIcon);
  return editIconBtn;
}

const createDeleteIcon = () => {
  const deleteIconBtn = document.createElement("button");
  deleteIconBtn.classList.add("delete-icon-btn");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-trash", "delete-icon");
  deleteIconBtn.append(deleteIcon);
  return deleteIconBtn;
}

const handleColorChange = () => {
  const colorWrapper = document.querySelector(".color-wrapper");
  const colorPicker = document.querySelector("#project-color");
  colorWrapper.style.backgroundColor = colorPicker.value;
}

export {openModalAdd, openModalEdit, addProject, closeModal, handleColorChange, 
  dynamicProjectFormEvent};