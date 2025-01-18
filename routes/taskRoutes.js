import express from 'express';
import {
  getAllTasks,
  createTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
} from '../controllers/taskController.js';

const router = express.Router();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Obtener todas las tareas
 *     responses:
 *       200:
 *         description: Lista de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   due_date:
 *                     type: string
 *                   status:
 *                     type: string
 */
router.get('/tasks', getAllTasks);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Crear una nueva tarea
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               due_date:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarea creada con éxito
 *       400:
 *         description: Error al crear la tarea
 */
router.post('/tasks', createTask);

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Actualizar una tarea existente
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               due_date:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tarea actualizada con éxito
 *       400:
 *         description: Error al actualizar la tarea
 */
router.put('/tasks/:id', updateTask);

/**
 * @swagger
 * /tasks/{id}/status:
 *   put:
 *     summary: Actualizar el estado de una tarea
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea cuyo estado se actualizará
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Estado actualizado con éxito
 *       400:
 *         description: Error al actualizar el estado
 */
router.put('/tasks/:id/status', updateTaskStatus);

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la tarea a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarea eliminada con éxito
 *       500:
 *         description: Error al eliminar la tarea
 */
router.delete('/tasks/:id', deleteTask);

export default router;
