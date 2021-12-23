import {addTaskEvent, dynamicFormEvent} from "./taskFormEvents";
import './style.css';

window.onload = () => {
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.addEventListener("click", addTaskEvent);

  //event delegator
  document.addEventListener("click", dynamicFormEvent);
};