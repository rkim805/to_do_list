import {addTaskEvent, dynamicFormEvent, openModal, closeModal, handleColorChange} from 
"./FormEvents";
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
  
  //event delegator
  document.addEventListener("click", dynamicFormEvent);
};