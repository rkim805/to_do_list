import {todoFactory, projectFactory} from "./projectObj";
import {getDate, isToday} from "date-fns";

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
  const todo = todoFactory(title, description, dueDate, priority);
  if(projectName === "inbox") {
    inbox.set(assignID(), todo);
  }
  else {
    const project = projectList.get(projectName);
    project.set(assignID(), todo);
  }
};

export {inbox, projectList, today, thisWeek}