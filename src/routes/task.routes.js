const express = require('express');
const routes = express.Router();
const controllerTask = require('../controllers/task.controller');

routes.get('/', controllerTask.getAllTasks);
routes.post('/', controllerTask.createTask);
routes.put('/:id', controllerTask.updateTask);
routes.delete('/:id', controllerTask.deleteTask);

module.exports = routes;