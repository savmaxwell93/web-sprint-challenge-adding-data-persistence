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

module.exports = { checkTaskPayload }
