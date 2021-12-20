/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inbox": () => (/* binding */ inbox),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "today": () => (/* binding */ today),
/* harmony export */   "thisWeek": () => (/* binding */ thisWeek)
/* harmony export */ });
/* harmony import */ var _projectObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);



//default project
const inbox = new Map();
const projectList = [];

const today = new Map();
const thisWeek = new Map();


const storeTodo = (title, description, dueDate, priority) => {
  const todo = (0,_projectObj__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(title, description, dueDate, priority);

};



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
const todoFactory = (title, descrption, dueDate, priority) => {
  const setPriorityHigh = () => priority = "high";
  const setPriorityMid = () => priority = "mid";
  const setPriorityLow = () => priority = "low";
  const setPriorityNone = () => priority = "";

  return {title, descrption, dueDate, setPriorityHigh, 
    setPriorityMid, setPriorityLow, setPriorityNone};
}

const projectFactory = (title, todoList) => {
  return {title, todoList};
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
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


window.onload = () => {
  const addTaskBtn = document.querySelector("#task-btn");
  addTaskBtn.addEventListener("click", addTaskEvent);
  document.addEventListener("click", dynamicFormEvent);
};

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
  addTaskFormButtons(form);
  return form;
}

const addTaskFormInputs = (inputlessForm) => {
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = "title-input";
  titleInput.placeholder = "Title";

  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = "description-input";
  descriptionInput.placeholder = "Description";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = "date-input";

  inputlessForm.append(titleInput);
  inputlessForm.append(descriptionInput);
  inputlessForm.append(dateInput);
}

const addProjectSelector = (form) => {
  const selector = document.createElement("select");
  selector.name = "project";
  selector.id = "project-selector";

  const inboxOption = document.createElement("option");
  inboxOption.value = "inbox";
  inboxOption.innerText = "Inbox";

  selector.append(inboxOption);

  for(project of _storage__WEBPACK_IMPORTED_MODULE_0__.projectList) {
    let projectOption = document.createElement("option");
    projectOption.value = project.title;
    projectOption.innerText = project.title;
    selector.append(projectOption);
  }
  
  form.append(selector);
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
})();

/******/ })()
;