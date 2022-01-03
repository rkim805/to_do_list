import {addTaskEvent, dynamicTodoFormEvent} from "./TodoFormEvents";
import {openModalAdd, addProject, closeModal, handleColorChange, 
  dynamicProjectFormEvent, handleEditProject} from 
  "./ProjectFormEvents"
import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

window.onload = () => {
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.addEventListener("click", addTaskEvent);

  const showModalAddBtn = document.querySelector(".show-modal-btn");
  showModalAddBtn.addEventListener("click", openModalAdd);
  const closeModalBtn = document.querySelector("#close-modal-btn");
  closeModalBtn.addEventListener("click", closeModal);

  //project form input event listeners
  const colorPicker = document.querySelector("#project-color");
  colorPicker.addEventListener("change", handleColorChange);
  const addProjectBtn = document.querySelector("#add-project-btn");
  addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProject();
  });
  const editProjectBtn = document.querySelector("#edit-project-btn");
  editProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleEditProject();
  });
  
  //event delegators, used add listeners to dynamically created elements
  document.addEventListener("click", dynamicTodoFormEvent);
  document.addEventListener("click", dynamicProjectFormEvent);
};