const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  if (tasks.length === 0) {
    taskList.innerHTML = `<div class="empty-state">No tasks added yet.</div>`;
    return;
  }

  tasks.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";

    taskItem.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description || "No description provided."}</p>
      <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
    `;

    taskList.appendChild(taskItem);
  });
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (taskTitle.value.trim() === "") {
    alert("Please enter a task title.");
    return;
  }

  const newTask = {
    id: Date.now(),
    title: taskTitle.value.trim(),
    description: taskDescription.value.trim()
  };

  tasks.push(newTask);
  saveTasks();
  renderTasks();

  taskForm.reset();
});

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  saveTasks();
  renderTasks();
}

renderTasks();