import db from '../db/db.js';

export const Task = {
  getAllTasks: async () => {
    return new Promise((resolve, reject) => {
      db.query('CALL sp_get_all_tasks()', (err, results) => {
        if (err) reject(err);
        resolve(results[0]);
      });
    });
  },

  createTask: async (name, description, due_date, status) => {
    return new Promise((resolve, reject) => {
      const query = 'CALL sp_create_task(?, ?, ?, ?)';
      db.query(query, [name, description, due_date, status], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  updateTask: async (id, name, description, due_date, status) => {
    return new Promise((resolve, reject) => {
      const query = 'CALL sp_update_task(?, ?, ?, ?, ?)';
      db.query(query, [id, name, description, due_date, status], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  updateTaskStatus: async (id, status) => {
    return new Promise((resolve, reject) => {
      const query = 'CALL sp_update_task(?, NULL, NULL, NULL, ?)';
      db.query(query, [id, status], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  deleteTask: async (id) => {
    return new Promise((resolve, reject) => {
      const query = 'CALL sp_delete_task(?)';
      db.query(query, [id], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }
};
