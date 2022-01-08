const todoFactory = (title, descrption, dueDate, priority) => {
  const id = self.crypto.randomUUID();
  return {title, descrption, dueDate, priority, id};
}

const projectFactory = (title, color) => {
  const id = self.crypto.randomUUID();
  const todoList = new Map();
  return {title, todoList, color, id};
}

export {todoFactory, projectFactory};