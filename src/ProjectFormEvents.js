import { formatRelative } from "date-fns";
import {storeProject, removeProjectData, updateProject, 
  getProjectTitle} from "./storage";

let lastClickedProjectID = -1;

const openProjectAddForm = () => {
  const editBtn = document.querySelector("#edit-project-btn");
  editBtn.style.display = "none";
  const addBtn = document.querySelector("#add-project-btn");
  addBtn.style.display = "inline-block";
  openProjectFormModal();
}

const openProjectEditForm = () => {
  const editBtn = document.querySelector("#edit-project-btn");
  editBtn.style.display = "inline-block";
  const addBtn = document.querySelector("#add-project-btn");
  addBtn.style.display = "none";
  openProjectFormModal();
}

const openProjectFormModal = () => {
  const projectForm = document.querySelector("#project-form");
  projectForm.style.display = "block";
  const deleteForm = document.querySelector("#delete-confirm-form");
  deleteForm.style.display = "none";
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

const closeModal = () => {
  const modal = document.querySelector(".modal");
  const projectName = document.querySelector("#project-name");

  //reset default from values upon modal form closing
  projectName.value = "";
  modal.style.display = "none";
}

const openDeleteForm = () => {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
  const projectForm = document.querySelector("#project-form");
  projectForm.style.display = "none";
  const deleteForm = document.querySelector("#delete-confirm-form");
  deleteForm.style.display = "block";
}

const addProject = () => {
  const projectName = document.querySelector("#project-name");
  const projectColor = document.querySelector("#project-color");
  const id = storeProject(projectName.value, projectColor.value);
  displayNewProject(projectName.value, id, projectColor.value);
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
    lastClickedProjectID = e.target.parentNode.dataset.id;

    const deletePrompt = document.querySelector("#delete-prompt");
    deletePrompt.innerHTML = `Are you sure you want to delete 
    <strong>${getProjectTitle(lastClickedProjectID)}</strong>?`;
    openDeleteForm();
  }
  else if(e.target && e.target.classList.contains("edit-icon-btn")) {
    //get project ID belonging to the edit icon's project
    lastClickedProjectID = e.target.parentNode.dataset.id;
    openProjectEditForm();
  }
}

const handleDeleteProject = () => {
  removeProjectData(lastClickedProjectID);
  const listElement = document.querySelector(`[data-id=
    "${lastClickedProjectID}"]`);
  listElement.remove();
  closeModal();
}

const handleEditProject = () => {
  const newName = document.querySelector("#project-name").value;
  const newColor = document.querySelector("#project-color").value;
  updateProject(lastClickedProjectID, newName, newColor);

    const nameToEdit = document.querySelector(`[data-id=
      "${lastClickedProjectID}"]>.project-info`);
    nameToEdit.innerText = newName;

    const iconToEdit =  document.querySelector(`[data-id=
      "${lastClickedProjectID}"]>.project-icon`);
    iconToEdit.style.color = newColor;
    closeModal();
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

export {openProjectAddForm, addProject, closeModal, handleColorChange, 
  handleEditProject, handleDeleteProject, dynamicProjectFormEvent};