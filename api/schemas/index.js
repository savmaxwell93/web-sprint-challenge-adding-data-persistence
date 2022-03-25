const yup = require('yup');

const projectSchema = yup.object({
    project_name: yup
        .string()
        .required('project name is required')
})

const resourceSchema = yup.object({
    resource_name: yup
        .string()
        .required('resource name is required')
})

const taskSchema = yup.object({
    task_description: yup
        .string()
        .required('task description is required'),
    project_id: yup
        .number()
        .required('must enter project_id')
})

module.exports = {
    projectSchema,
    resourceSchema,
    taskSchema
}
