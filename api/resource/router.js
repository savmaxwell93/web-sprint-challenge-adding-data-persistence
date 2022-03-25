const router = require('express').Router();
const Resource = require('./model');
const { checkResourcePayload } = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resource.findResources()
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/', checkResourcePayload, async (req, res, next) => {
    try {
        const newResource = await Resource.createResource(req.body);
        res.status(201).json(newResource);
    } catch (err) {
        next(err)
    }
})

module.exports = router;
