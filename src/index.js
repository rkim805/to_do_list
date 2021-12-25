import {addTaskEvent, dynamicFormEvent, openModal, closeModal} from 
"./FormEvents";
import './style.css';
import '@fortawesome/fontawesome-free/js/all'

window.onload = () => {
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.addEventListener("click", addTaskEvent);

  const showModalBtn = document.querySelector(".show-modal-btn");
  showModalBtn.addEventListener("click", openModal);

  const closeModalBtn = document.querySelector("#close-modal-btn");
  closeModalBtn.addEventListener("click", closeModal);
  
  //event delegator
  document.addEventListener("click", dynamicFormEvent);
};