import {todoFactory, projectFactory} from "./projectObj";
import {getDate, isToday} from "date-fns";

//default project, map with lists of todos.
const inbox = new Map();
const projectList = new Map();

const today = new Map();
const thisWeek = new Map();


/*Module pattern that contains methods to manage unique IDs for 
each project and ID. */
const idManager = (() => {
  let toDoIDCounter = -1;
  let projectCounter = -1;
  
  const assignTodoID = () => {
    toDoIDCounter++;
    return toDoIDCounter;
  };
  
  const assignProjectID = () => {
    projectCounter++;
    return projectCounter;
  };
  return {
    assignProjectID, 
    assignTodoID
  }
})();

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
  const todo = todoFactory(title, description, dueDate, priority);
  if(projectName === "inbox") {
    inbox.set(idManager.assignTodoID(), todo);
  }
  else {
    const project = projectList.get(projectName);
    project.set(idManager.assignTodoID(), todo);
  }
};

const storeProject = (title, color) => {
  const projectID = idManager.assignProjectID();
  const newProject = projectFactory(title, color);
  projectList.set(projectID, newProject);
  return projectID;
}

const updateProject = (id, title, color) => {
  const newProject = projectFactory(title, color);
  projectList.set(id, newProject);
}

const removeProjectData = (projectID) => {
  projectList.delete(projectID);
}

export {inbox, projectList, today, thisWeek, storeProject, updateProject,
  removeProjectData, storeTodo};