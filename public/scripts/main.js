import { fetchTasks, createTask } from './api.js';
import { renderTasks } from './ui.js';
import { openUpdateModal, openStatusModal } from './modal.js';
import { toggleConfirmModal } from './confirmModal.js';

function showNotification(message, type = "success") {
  const notificationContainer = document.getElementById("notificationContainer");
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.textContent = message;

  notificationContainer.appendChild(notification);

  setTimeout(() => {
    notification.classList.add("hide");
    setTimeout(() => notification.remove(), 500);
  }, 3000);
}

export async function fetchAndRenderTasks() {
  const tasks = await fetchTasks();
  renderTasks(tasks);
}

window.addEventListener("DOMContentLoaded", fetchAndRenderTasks);

document.getElementById("taskForm").onsubmit = async (e) => {
  e.preventDefault();

  const taskData = {
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    due_date: document.getElementById("due_date").value,
    status: "pending",
  };

  try {
    await createTask(taskData);
    showNotification("¡Tarea agregada correctamente!", "success");
    document.getElementById("taskForm").reset();
    fetchAndRenderTasks();
  } catch (error) {
    showNotification("Error al agregar la tarea. Inténtalo de nuevo.", "error");
    console.error("Error al agregar tarea:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("viewTasksButton").addEventListener("click", () => {
    document.getElementById("taskListSection").style.display = "block";
    document.getElementById("taskFormSection").style.display = "none";
  });

  document.getElementById("addTaskButton").addEventListener("click", () => {
    document.getElementById("taskListSection").style.display = "none";
    document.getElementById("taskFormSection").style.display = "block";
  });
});

window.deleteTask = function (id) {
  toggleConfirmModal(true, id);
};

window.openUpdateModal = openUpdateModal;
window.openStatusModal = openStatusModal;
