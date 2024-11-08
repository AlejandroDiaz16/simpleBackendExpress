let todos = [
    {id: 1, title: 'Sample todo 1', completed: false},
    {id: 2, title: 'Sample todo 2', completed: true}
]

function getAllTodos() {
    const resp = {
        data: todos
    }
    return resp
}

function addTodos(obj) {
  const resp = {};
  if (obj?.title) {
    const element = {
      id: todos.length,
      title: obj.title,
      completed: false,
    };
    todos.push(element);
    resp.data = element;
  } else {
    resp.error = "Invalid data";
  }
  return resp;
}

function updateTodosById(elementId, element) {
    const resp = {}
    if (element && elementId) {
        const id = parseInt(elementId);
        const index = todos.indexOf(element => element.id == id);
        if (index !== -1) {
            todos[index] = element;
            resp.data = todos[index]
        } else {
            resp.error = 'There is no element with this id'
        }
    } else {
        resp.error = 'Invalid data'
    }
    return resp
}

function deleteTodosById(elementId) {
    const resp = {}
    if (elementId) {
        const id = parseInt(elementId);
        const index = todos.indexOf(element => element.id == id)
        if (index != -1) {
            todos.splice(index, 1);
            resp.data = `Element deleted with id ${id}`
        } else {
            resp.error = `There is no element with this id: ${id}`
        }
    } else {
        resp.error = 'Invalid data'
    }
    return resp
}

module.exports = {
    getAllTodos,
    updateTodosById,
    deleteTodosById,
    addTodos
}