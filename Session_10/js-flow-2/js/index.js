// Initialize to-do list array
let todoList = [];

// Get HTML elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoListContainer = document.querySelector('#todo-list');
const deleteAllDoneButton = document.querySelector('#delete-all-done');

// Add event listeners
todoForm.addEventListener('submit', handleSubmit);
deleteAllDoneButton.addEventListener('click', handleDeleteAllDone);

// Handle form submit event
function handleSubmit(event) {
  event.preventDefault();
  const title = todoInput.value.trim();
  if (title !== '') {
    const newTask = {
      id: todoList.length + 1,
      title: title,
      completed: false,
    };
    todoList.push(newTask);
    renderTodoList();
    todoInput.value = '';
  }
}

// Handle checkbox click event
function handleCheckTask(event) {
  const taskId = parseInt(event.target.dataset.id);
  const task = todoList.find(task => task.id === taskId);
  task.completed = event.target.checked;
  renderTodoList();
}

// Handle delete button click event
function handleDelete(event) {
  const taskId = parseInt(event.target.dataset.id);
  todoList = todoList.filter(task => task.id !== taskId);
  renderTodoList();
}

// Handle delete all done button click event
function handleDeleteAllDone(event) {
  todoList = todoList.filter(task => !task.completed);
  renderTodoList();
}

// Render to-do list
function renderTodoList() {
  // Clear the list container
  todoListContainer.innerHTML = '';

  // Render each task as an <li> element
  todoList.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" class="checkbox" data-id="${task.id}" ${
      task.completed ? 'checked' : ''
    }>
      <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
    `;
    listItem.querySelector('.checkbox').addEventListener('click', handleCheckTask);
    todoListContainer.appendChild(listItem);
  });
}
