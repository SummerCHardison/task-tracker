// Retrieve tasks and nextId from localStorage
const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
const nextId = JSON.parse(localStorage.getItem("nextId"));
const formID = document.getElementById('formID');
const saveButton = document.getElementById('save');

// Todo: create a function to generate a unique task id
function generateTaskId() {
  return crypto.randomUUID();
}

//above function uses crypto to add unique IDs to the tasks

// Todo: create a function to create a task card
function createTaskCard(task) {
  console.log(task);
  const taskCard = $('<div>')
    .addClass('card project-card draggable my-3')
    .attr('data-project-id', task.id);
  const cardHeader = $('<div>').addClass('card-header h4').text(task.title);
  const cardBody = $('<div>').addClass('card-body');
  const cardDescription = $('<p>').addClass('card-text').text(task.description);
  const cardDueDate = $('<p>').addClass('card-text').text(task.dueDate);
  const cardDeleteBtn = $('<button>')
    .addClass('btn btn-danger delete')
    .text('Delete')
    .attr('data-project-id', task.id)
  cardDeleteBtn.on('click', handleDeleteTask);

  cardBody.append(cardDescription, cardDueDate, cardDeleteBtn);
  taskCard.append(cardHeader, cardBody);

  return taskCard;
}
//above functions creates a card from bootstrap, however using JS to add the needed elements, classes, attributes, ect.

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  $(".draggable").draggable();
  $('#todo-cards').empty();
  for (const task of taskList) {
    const taskCard = createTaskCard(task);
    $('#todo-cards').append(taskCard)
  }
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


  const newTask = {
    title: taskTitle,
    dueDate: taskDueDate,
    description: taskDescription
  }

  taskList.push(newTask)

  localStorage.setItem('tasks', JSON.stringify(taskList))
  renderTaskList();
}
//the above function gets the needed elements, adds them to local storage, makes an object with all of the previous information, makes an empty array which has the object pushed into it

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $('#datePicker').datepicker();
  saveButton.addEventListener('click', handleAddTask);
  renderTaskList();
  });

  // the above function makes it so that there is a date picker, calls previous functions so they run, and adds any needed event listeners