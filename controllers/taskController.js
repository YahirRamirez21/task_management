import { Task } from '../models/taskModel.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.getAllTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Error al obtener las tareas');
  }
};

export const createTask = async (req, res) => {
  const { name, description, due_date, status } = req.body;

  if (!name || !due_date) {
    return res.status(400).send('El nombre y la fecha de vencimiento son obligatorios.');
  }

  try {
    await Task.createTask(name, description, due_date, status);
    res.send('Tarea creada exitosamente');
  } catch (err) {
    res.status(400).send('Error al crear la tarea');
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const { name, description, due_date, status } = req.body;

  if (!name || !due_date) {
    return res.status(400).send('El nombre y la fecha de vencimiento son obligatorios.');
  }

  try {
    await Task.updateTask(id, name, description, due_date, status);
    res.send('Tarea actualizada con éxito');
  } catch (err) {
    res.status(400).send('Error al actualizar la tarea');
  }
};

export const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) return res.status(400).send('El estado es obligatorio.');

  try {
    await Task.updateTaskStatus(id, status);
    res.send('Estado actualizado con éxito.');
  } catch (err) {
    res.status(500).send('Error al actualizar el estado.');
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.deleteTask(id);
    res.json({ message: "Tarea eliminada con éxito" });
  } catch (err) {
    res.status(500).json({ error: "Error al eliminar la tarea" });
  }
};
