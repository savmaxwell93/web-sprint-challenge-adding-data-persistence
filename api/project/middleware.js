const { projectSchema } = require('../schemas/index');

const checkProjectPayload = async (req, res, next) => {
    try {
        const validated = await projectSchema.validate(req.body);
        req.body = validated;
        next();
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = { checkProjectPayload }
