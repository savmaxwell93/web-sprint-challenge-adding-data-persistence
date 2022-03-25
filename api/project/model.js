const db = require('../../data/dbConfig');
const convertToBoolean = require('../shared-model/shared-model');

async function findProjects() {
    const results = await db('projects');

    results.forEach((result) => {
        convertToBoolean(result, 'project_completed')
    })

    return results;
}

async function findProjectById(project_id) {
    const result = await db('projects').where({ project_id }).first();

    convertToBoolean(result, 'project_completed')

    return result;
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
