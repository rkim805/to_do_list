import {todoFactory, projectFactory} from "./projectObj";
import {getDate, isToday} from "date-fns";

//default project, map with lists of todos.
const inbox = new Map();
const projectList = new Map();

const today = new Map();
const thisWeek = new Map();

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
 * @param {String} projectID - ID of project that this todo should belong to. 
 */
const storeTodo = (title, description, dueDate, priority, projectID) => {
  const todo = todoFactory(title, description, dueDate, priority);
  const project = projectList.get(projectID);
  project.set(todo.id, todo);
};

const storeProject = (title, color) => {
  const newProject = projectFactory(title, color, self.crypto.randomUUID());
  projectList.set(newProject.id, newProject);
  return newProject.id;
}

const updateProject = (id, title, color) => {
  const newProject = projectFactory(title, color);
  projectList.set(id, newProject);
}

const removeProjectData = (projectID) => {
  projectList.delete(projectID);
}

const getProjectTitle = (projectID) => {
  const project = projectList.get(projectID);
  return project.title;
}

export {inbox, projectList, today, thisWeek, storeProject, updateProject,
  removeProjectData, getProjectTitle, storeTodo};