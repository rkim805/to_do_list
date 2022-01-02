import {addTaskEvent, dynamicTodoFormEvent} from "./TodoFormEvents";
import {openModal, addProject, closeModal, handleColorChange, dynamicProjectFormEvent} from 
  "./ProjectFormEvents"
import './style.css';
import '@fortawesome/fontawesome-free/js/all.js';

window.onload = () => {
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.addEventListener("click", addTaskEvent);

  const showModalBtn = document.querySelector(".show-modal-btn");
  showModalBtn.addEventListener("click", openModal);
  const closeModalBtn = document.querySelector("#close-modal-btn");
  closeModalBtn.addEventListener("click", closeModal);
  const colorPicker = document.querySelector("#project-color");
  colorPicker.addEventListener("change", handleColorChange);
  const addProjectBtn = document.querySelector("#add-project-btn");
  addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addProject()
  });
  
  //event delegators, used add listeners to dynamically created nodes
  document.addEventListener("click", dynamicTodoFormEvent);
  document.addEventListener("click", dynamicProjectFormEvent);
};