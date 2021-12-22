import {addTaskEvent, dynamicFormEvent} from "./taskFormEvents";

window.onload = () => {
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.addEventListener("click", addTaskEvent);

  //event delegator
  document.addEventListener("click", dynamicFormEvent);
};