const API_URL = "/tasks";

async function request(url, options = {}) {
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.status}`);
  }

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return await response.json();
  } else {
    return await response.text();
  }
}

export async function fetchTasks() {
  return await request(API_URL);
}

export async function createTask(taskData) {
  return await request(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
}

export async function updateTask(id, taskData) {
  const response = await request(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  return response;
}

export async function deleteTask(id) {
  await request(`/tasks/${id}`, { method: "DELETE" });
  return "Tarea eliminada correctamente.";
}

export async function updateTaskStatus(id, status) {
  return await request(`${API_URL}/${id}/status`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
}
