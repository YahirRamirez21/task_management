import { openUpdateModal, openStatusModal } from './modal.js';

const taskTableBody = document.querySelector("#taskTable tbody");

export function renderTasks(tasks) {
  const statusMap = {
    pending: "Pendiente",
    in_progress: "En Progreso",
    completed: "Completada"
  };

  taskTableBody.innerHTML = tasks.map(task => {
    const formattedDate = new Date(task.due_date).toLocaleDateString("es-ES");
    const taskStatus = statusMap[task.status] || task.status;

    return `
      <tr>
        <td>${task.id}</td>
        <td>${task.name}</td>
        <td>${task.description}</td>
        <td>${formattedDate}</td>
        <td class="status ${task.status}">${taskStatus}</td>
        <td class="actions">
          <button onclick="openUpdateModal(${task.id}, '${task.name}', '${task.description}', '${task.due_date}', '${task.status}')">
            <i class="fas fa-edit"></i> Editar
          </button>
          <button onclick="openStatusModal(${task.id})">
            <i class="fas fa-sync-alt"></i> Cambiar Estado
          </button>
          <button onclick="deleteTask(${task.id})">
            <i class="fas fa-trash-alt"></i> Eliminar
          </button>
        </td>
      </tr>
    `;
  }).join('');
}
