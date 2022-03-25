const db = require('../../data/dbConfig');
const { taskSchema } = require('../schemas/index');

const checkTaskPayload = async (req, res, next) => {
    try {
        const validated = await taskSchema.validate(req.body);
        req.body = validated;
        next();
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

const checkProjectID = async (req, res, next) => {
    try {
        const existing = await db('tasks')
            .where('project_id', req.params.project_id)
            .first()

        if(!existing) {
            next({
                status: 404,
                message: `project with project_id ${req.params.project_id} not found`
            })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    checkTaskPayload,
    checkProjectID
}
