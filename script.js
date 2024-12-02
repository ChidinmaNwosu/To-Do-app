// Access necessary elements
const todoForm = document.getElementById("todo-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

//Create a function to add a task
function addTask(event) {
  event.preventDefault(); //prevent default form submission

  const taskText = taskInput.value.trim(); //get the value of the input and remove whitespace
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  //create a new task list item
  const taskItem = document.createElement("li");

  //Add task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskItem.appendChild(taskSpan);

  // Add a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    taskList.removeChild(taskItem);
  });
  taskItem.appendChild(deleteButton);

  // Append the new list item to the task list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
}

// Attach event listener to the form
todoForm.addEventListener("submit", addTask);
