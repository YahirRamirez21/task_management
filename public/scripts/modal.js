import { updateTask, updateTaskStatus } from "./api.js";
import { fetchAndRenderTasks } from "./main.js";

export let selectedTaskId = null;

export function openUpdateModal(id, name, description, due_date, status) {
  selectedTaskId = id;
  document.getElementById("modalName").value = name;
  document.getElementById("modalDescription").value = description;
  document.getElementById("modalStatus").value = status;

  const formattedDate = new Date(due_date).toISOString().split("T")[0];
  document.getElementById("modalDueDate").value = formattedDate;

  document.getElementById("updateModal").style.display = "flex";
}

export async function submitUpdateTask() {
  const name = document.getElementById("modalName").value;
  const description = document.getElementById("modalDescription").value;
  const due_date = document.getElementById("modalDueDate").value;
  const status = document.getElementById("modalStatus").value;

  if (!name || !due_date || !status) {
    alert(
      'Los campos "Nombre", "Fecha de vencimiento" y "Estado" son obligatorios.'
    );
    return;
  }

  try {
    await updateTask(selectedTaskId, { name, description, due_date, status });
    fetchAndRenderTasks();
    closeModal();
  } catch (error) {
    console.error("Error al actualizar la tarea:", error);
  }
}

export function openStatusModal(id) {
  selectedTaskId = id;
  document.getElementById("statusModal").style.display = "flex";
}

export async function submitUpdateStatus() {
  const status = document.getElementById("statusSelect").value;
  await updateTaskStatus(selectedTaskId, status);
  fetchAndRenderTasks();
  closeStatusModal();
}

export function closeModal() {
  document.getElementById("updateModal").style.display = "none";
}

export function closeStatusModal() {
  document.getElementById("statusModal").style.display = "none";
}

window.openUpdateModal = openUpdateModal;
window.submitUpdateTask = submitUpdateTask;
window.submitUpdateStatus = submitUpdateStatus;
window.closeModal = closeModal;
window.closeStatusModal = closeStatusModal;
