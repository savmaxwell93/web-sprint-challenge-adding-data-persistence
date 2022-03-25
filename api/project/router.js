const router = require('express').Router();
const Project = require('./model');
const { checkProjectPayload } = require('./middleware');

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.findProjects()
        res.status(200).json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', checkProjectPayload, async (req, res, next) => {
    try {
        const newProject = await Project.createProject(req.body);
        res.status(201).json(newProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router;
