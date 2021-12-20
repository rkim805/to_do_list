import {todoFactory, projectFactory} from "./projectObj";
import {getDate, isToday} from "date-fns";

//default project
const inbox = new Map();
const projectList = [];

const today = new Map();
const thisWeek = new Map();


const storeTodo = (title, description, dueDate, priority) => {
  const todo = todoFactory(title, description, dueDate, priority);

};

export {inbox, projectList, today, thisWeek}