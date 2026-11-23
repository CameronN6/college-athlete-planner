
function addItem(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);

  const value = input.value.trim();

  if (value === "") {
    alert("Please enter something first.");
    return;
  }

  const item = document.createElement("li");
  item.textContent = value;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "10px";

  deleteButton.onclick = function () {
    item.remove();
  };

  item.appendChild(deleteButton);
  list.appendChild(item);

  input.value = "";
}

function addTask() {
  addItem("taskInput", "taskList");
}

function addWorkout() {
  addItem("workoutInput", "workoutList");
}

function addSchedule() {
  addItem("scheduleInput", "scheduleList");
}
