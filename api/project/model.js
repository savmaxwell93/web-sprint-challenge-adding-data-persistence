const db = require('../../data/dbConfig');
const convertToBoolean = require('../shared-model/shared-model');

async function findProjects() {
    const projects = await db('projects');

    projects.forEach((project) => {
        convertToBoolean(project, 'project_completed')
    })

    return projects;
}

async function findProjectById(project_id) {
    const project = await db('projects').where({ project_id }).first();

    convertToBoolean(project, 'project_completed');

    return project;
}

async function createProject(project) {
    const [project_id] = await db('projects').insert(project);

    return findProjectById(project_id);
}

module.exports = {
    findProjects,
    findProjectById,
    createProject
}
