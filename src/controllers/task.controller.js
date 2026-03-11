const prisma = require('../prisma/client.js');

const getAllTasks = async (req, res) => {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
};

const createTask = async (req, res) => {
    const task = await prisma.task.create({ data: { ...req.body, userId: 1 } });
    res.status(201).json(task);
};

const updateTask = async (req, res) => {
    const task = await prisma.task.update({ where: { id: Number(req.params.id) }, data: req.body });
    res.json(task);
};

const deleteTask = async (req, res) => {
    const task = await prisma.task.delete({ where: { id: Number(req.params.id) } });
    res.json(task);
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };