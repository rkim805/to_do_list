const todoFactory = (title, descrption, dueDate, priority, id) => {
  return {title, descrption, dueDate, priority, id};
}

const projectFactory = () => {
  const todoList = new Map();
  return {todoList};
}

export {todoFactory, projectFactory};