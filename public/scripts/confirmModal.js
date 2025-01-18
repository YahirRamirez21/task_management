import { deleteTask } from "./api.js";
import { fetchAndRenderTasks } from "./main.js";

export function toggleConfirmModal(show, id) {
  const modal = document.getElementById("confirmModal");
  modal.style.display = show ? "flex" : "none";

  if (show) {
    document.getElementById("confirmDeleteButton").onclick = () => deleteConfirmed(id);
    document.querySelector(".confirm-no").onclick = closeConfirmModal;
  }
}

export function closeConfirmModal() {
  toggleConfirmModal(false);
}

export async function deleteConfirmed(id) {
  try {
    const message = await deleteTask(id);
    await fetchAndRenderTasks();
    closeConfirmModal();
  } catch (error) {
    console.error("Error al eliminar la tarea:", error);
  }
}
