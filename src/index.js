import {addTaskEvent, dynamicTodoFormEvent} from "./TodoFormEvents";
import {openProjectAddForm, addProject, closeModal, handleColorChange, 
  dynamicProjectFormEvent, handleEditProject, handleDeleteProject} from 
  "./ProjectFormEvents"
import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

window.onload = () => {
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.addEventListener("click", addTaskEvent);

  const showModalAddBtn = document.querySelector(".show-modal-btn");
  showModalAddBtn.addEventListener("click", openProjectAddForm);
  const closeModalBtn = document.querySelector("#close-modal-btn");
  closeModalBtn.addEventListener("click", closeModal);

  //project form input event listeners
  const projectForm = document.querySelector("#project-form");
  const colorPicker = document.querySelector("#project-color");
  colorPicker.addEventListener("change", handleColorChange);
  const addProjectBtn = document.querySelector("#add-project-btn");
  addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const isValid = projectForm.reportValidity();
    if(isValid) {
      addProject();
    }
  });
  const editProjectBtn = document.querySelector("#edit-project-btn");
  editProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let isValid = projectForm.reportValidity();
    if(isValid) {
      handleEditProject();
    }
  });


  const cancelDeleteBtn = document.querySelector("#cancel-delete-btn");
  cancelDeleteBtn.addEventListener("click", closeModal);
  const confirmDeleteBtn = document.querySelector("#confirm-delete-btn");
  confirmDeleteBtn.addEventListener("click", handleDeleteProject);
  
  //event delegators, used add listeners to dynamically created elements
  document.addEventListener("click", dynamicTodoFormEvent);
  document.addEventListener("click", dynamicProjectFormEvent);
};