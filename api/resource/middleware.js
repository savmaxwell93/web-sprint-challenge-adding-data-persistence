const { resourceSchema } = require('../schemas/index');

const checkResourcePayload = async (req, res, next) => {
    try {
        const validated = await resourceSchema.validate(req.body);
        req.body = validated;
        next();
    } catch (err) {
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports = { checkResourcePayload }
