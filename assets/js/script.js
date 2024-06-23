// Retrieve tasks and nextId from localStorage
const taskList = JSON.parse(localStorage.getItem("tasks"));
const nextId = JSON.parse(localStorage.getItem("nextId"));
const formID = document.getElementById('formID')
const saveButton = document.getElementById('save')

saveButton.addEventListener('click', handleAddTask);

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const taskCard = $('<div>')
    .addClass('card project-card draggable my-3')
  const cardHeader = $('<div>').addClass('card-header h4').text(localStorage.getItem('taskTitle').value);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(localStorage.getItem('taskDescription').value);
  const cardDueDate = $('<p>').addClass('card-text').text(localStorage.getItem('taskDueDate').value);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
  cardDeleteBtn.on('click', handleDeleteTask);

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  $(".draggable").draggable();
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
  event.preventDefault();

  const taskTitle = document.getElementById('title').value;
  const taskDueDate = document.getElementById('datePicker').value;
  const taskDescription = document.getElementById('description').value;
  localStorage.setItem('taskTitle', taskTitle);
  localStorage.setItem('taskDueDate', taskDueDate);
  localStorage.setItem('taskDescription', taskDescription);
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $('#datePicker').datepicker()
  });