const router = require('express').Router();
const Task = require('./model');
const { checkTaskPayload } = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.findTasks()
        res.status(200).json(tasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', checkTaskPayload, async (req, res, next) => {
    try {
        const newTask = await Task.createTask(req.body)
        res.status(201).json(newTask)
    } catch (err) {
        next(err)
    }
})

module.exports = router;
