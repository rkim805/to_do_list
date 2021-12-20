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

export {todoFactory, projectFactory};