// Initialize to-do list array
let todoList = [];

// Get HTML elements
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoListContainer = document.querySelector('#todo-list');
const deleteAllDoneButton = document.querySelector('#delete-all-done');
// Get the filter checkboxes
const filterCompletedCheckbox = document.getElementById('filter-completed');
const filterUncompletedCheckbox = document.getElementById('filter-uncompleted');


// Add event listeners
todoForm.addEventListener('submit', handleSubmit);
deleteAllDoneButton.addEventListener('click', handleDeleteAllDone);
filterCompletedCheckbox.addEventListener('change', renderTodoList);
filterUncompletedCheckbox.addEventListener('change', renderTodoList);

// Handle form submit event
function handleSubmit(event) {
  event.preventDefault();
  const title = todoInput.value.trim();
  if (title) {
    const newTask = {
      id: todoList.length + 1,
      title,
      completed: false,
    };
    todoList.push(newTask);
    renderTodoList();
    todoInput.value = '';
  } else {
    alert("Please, write a task!");
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
  const showCompleted = document.getElementById('filter-completed').checked;
  const showUncompleted = document.getElementById('filter-uncompleted').checked;

  if (!showCompleted && !showUncompleted) {
    // Render each task as an <li> element
    todoList.forEach((task) => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
      <input type="checkbox" class="checkbox" data-id="${task.id}" ${task.completed ? 'checked' : ''
        }>
      <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
    `;
      listItem.querySelector('.checkbox').addEventListener('click', handleCheckTask);
      todoListContainer.appendChild(listItem);
    });
  } else {
    filteringTasks(todoList, showCompleted, showUncompleted);
  }

}


function filteringTasks(todoList, showCompleted, showUncompleted) {
  const filteredTasks = todoList.filter((task) => {
    if (showCompleted && showUncompleted) {
      return true; // Show all tasks
    } else if (showCompleted && task.completed) {
      return true; // Show completed tasks
    } else if (showUncompleted && !task.completed) {
      return true; // Show uncompleted tasks
    } else {
      return false; // Don't show this task
    }
  });

  filteredTasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <input type="checkbox" class="checkbox" data-id="${task.id}" ${
      task.completed ? 'checked' : ''
    }>
      <span class="${task.completed ? 'completed' : ''}">${task.title}</span>
    `;
    listItem
      .querySelector('.checkbox')
      .addEventListener('click', handleCheckTask);
    todoListContainer.appendChild(listItem);
  });
}
