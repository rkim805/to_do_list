/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskEvent": () => (/* binding */ addTaskEvent),
/* harmony export */   "dynamicFormEvent": () => (/* binding */ dynamicFormEvent)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


const addTaskEvent = () => {
  const app = document.querySelector("#list-app");
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.style.display = "none";

  const form = createTaskForm();
  app.append(form);
}

const createTaskForm = () => {
  const form = document.createElement("form");
  form.id = "add-task-form";

  addTaskFormInputs(form);
  addProjectSelector(form);
  addPrioritySelector(form);
  addTaskFormButtons(form);
  return form;
}

const addTaskFormInputs = (inputlessForm) => {
  const title = hiddenLabelInput("text", "title-input", "Title");
  const description = hiddenLabelInput("text", "description-input", 
  "Description");

  //const descriptionInput = document.createElement("label");
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = "description-input";
  descriptionInput.placeholder = "Description";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "date-input";

  inputlessForm.append(title.label);
  inputlessForm.append(title.input);
  inputlessForm.append(description.label);
  inputlessForm.append(description.input);
  inputlessForm.append(dateInput);
}

const hiddenLabelInput = (inputType, id, placeholder="") => {
  const label = document.createElement("label");
  label.hidden = true;
  label.for = id;
  const input = document.createElement("input");
  input.type = inputType;
  input.id = id;
  input.name = id;
  input.placeholder = placeholder;
  return {label, input};
}

const addPrioritySelector = (form) => {
  const prioritySelector = document.createElement("select");
  prioritySelector.name = "priority";
  prioritySelector.id = "priority-selector";

  const PRIORITY_MAX = 4;
  for(let i = 1; i <= PRIORITY_MAX; i++) {
    const priorityOption = document.createElement("option");
    priorityOption.value = `Priority ${i}`;
    priorityOption.innerText = `Priority ${i}`;
    prioritySelector.append(priorityOption);
  }
  form.append(prioritySelector);
}

const addProjectSelector = (form) => {
  const projectSelector = document.createElement("select");
  projectSelector.name = "project";
  projectSelector.id = "project-selector";

  const inboxOption = document.createElement("option");
  inboxOption.value = "inbox";
  inboxOption.innerText = "Inbox";

  projectSelector.append(inboxOption);

  for(const project of _storage__WEBPACK_IMPORTED_MODULE_0__.projectList) {
    let projectOption = document.createElement("option");
    projectOption.value = project.title;
    projectOption.innerText = project.title;
    projectSelector.append(projectOption);
  }
  
  form.append(projectSelector);
}

const addTaskFormButtons = (btnlessForm) => {
  const confirmAddBtn = document.createElement("button");
  confirmAddBtn.type = "button";
  confirmAddBtn.innerText = "Add Task";
  confirmAddBtn.id = "confirm-add-btn";

  const cancelAddBtn = document.createElement("button");
  cancelAddBtn.type = "button";
  cancelAddBtn.innerText = "Cancel";
  cancelAddBtn.id = "cancel-add-btn";

  btnlessForm.append(confirmAddBtn);
  btnlessForm.append(cancelAddBtn);
}

const dynamicFormEvent = (e) => {
  if(e.target && e.target.id === "confirm-add-btn") {
    confirmAddEvent();
  }
  else if(e.target && e.target.id === "cancel-add-btn"){
    cancelAddEvent();
  }
}

const confirmAddEvent = () => {
  removeForm();

  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.style.display = "block";
}

const cancelAddEvent = () => {
  removeForm();
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.style.display = "block";
}

const removeForm = () => {
  const form = document.querySelector("#add-task-form");
  while(form && form.firstChild) {
    form.removeChild(form.lastChild);
  }
  form.parentNode.removeChild(form);
}



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inbox": () => (/* binding */ inbox),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "today": () => (/* binding */ today),
/* harmony export */   "thisWeek": () => (/* binding */ thisWeek)
/* harmony export */ });
/* harmony import */ var _projectObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);



//default project, map with lists of todos.
const inbox = new Map();
const projectList = new Map();

const today = new Map();
const thisWeek = new Map();


//incrementing ID counter for each created todo. Creates unique IDs for each
//todo.
let toDoIDCounter = -1;

const assignID = () => {
  toDoIDCounter++;
  return toDoIDCounter;
}
/**
 * storeTodo - Create a todo and store it in respective project,
 * and date maps if it falls within today/this week.
 * 
 * Optional parameters should have a value of null.
 * 
 * @param {String} title
 * @param {String} description - optional
 * @param {Date} dueDate - optional
 * @param {int} priority - optional. Value of 0-3, with higher number 
 * being higher priority
 * @param {String} projectName - Project that this todo should belong to. 
 */
const storeTodo = (title, description, dueDate, priority, projectName) => {
  const todo = (0,_projectObj__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(title, description, dueDate, priority);
  if(projectName === "inbox") {
    inbox.set(assignID(), todo);
  }
  else {
    const project = projectList.get(projectName);
    project.set(assignID(), todo);
  }
};



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const todoFactory = (title, descrption, dueDate, priority, id) => {
  return {title, descrption, dueDate, priority, id};
}

const projectFactory = () => {
  const todoList = new Map();
  return {todoList};
}



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskFormEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


window.onload = () => {
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.addEventListener("click", _taskFormEvents__WEBPACK_IMPORTED_MODULE_0__.addTaskEvent);

  //event delegator
  document.addEventListener("click", _taskFormEvents__WEBPACK_IMPORTED_MODULE_0__.dynamicFormEvent);
};
})();

/******/ })()
;