import {todoFactory, projectFactory} from "./projectObj";

//default project
const inbox = new Map();
const projectList = new Map();

const today = new Map();
const thisWeek = new Map();


const storeTodo = (title, description, dueDate, priority) => {
  const todo = todoFactory(title, description, dueDate, priority);

};

export {inbox, projectList, today, thisWeek}