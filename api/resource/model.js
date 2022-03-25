const db = require('../../data/dbConfig');

function findResources() {
    return db('resources');
}

function findResourceById(resource_id) {
    return db('resources').where({ resource_id }).first();
}

async function createResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return findResourceById(resource_id);
}

module.exports = {
    findResources,
    findResourceById,
    createResource
}
