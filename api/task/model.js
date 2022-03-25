const db = require('../../data/dbConfig');
const convertToBoolean = require('../shared-model/shared-model');

async function findTasks() {
    const tasks = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'p.project_name', 'p.project_description')

    tasks.forEach((task) => {
        convertToBoolean(task, 'task_completed')
    })

    return tasks;
}

async function findTaskById(task_id) {
    const task = await db('tasks').where({ task_id }).first();

    convertToBoolean(task, 'task_completed');

    return task;
}

async function createTask(task) {
    const [task_id] = await db('tasks').insert(task);

    return findTaskById(task_id);
}

module.exports = {
    findTasks,
    findTaskById,
    createTask
}
