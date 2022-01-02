const todoFactory = (title, descrption, dueDate, priority, id) => {
  return {title, descrption, dueDate, priority, id};
}

const projectFactory = (title, color) => {
  const todoList = new Map();
  return {title, todoList, color};
}

export {todoFactory, projectFactory};