const Task = require('../models/taskModel');

exports.getAllTasks = (req, res) => {
    Task.getAll((err, tasks) => {
        if (err) res.status(500).send(err);
        res.status(200).json(tasks);
    });
};

exports.getTaskById = (req, res) => {
    Task.getById(req.params.id, (err, task) => {
        if (err) res.status(500).send(err);
        res.status(200).json(task);
    });
};

exports.createTask = (req, res) => {
    Task.create(req.body, (err, result) => {
        if (err) res.status(500).send(err);
        res.status(201).json({ id: result.insertId, ...req.body });
    });
};

exports.updateTask = (req, res) => {
    Task.update(req.params.id, req.body, (err) => {
        if (err) res.status(500).send(err);
        res.status(200).json({ id: req.params.id, ...req.body });
    });
};

exports.deleteTask = (req, res) => {
    Task.delete(req.params.id, (err) => {
        if (err) res.status(500).send(err);
        res.status(204).send();
    });
};
