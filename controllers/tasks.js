const task = require('..//models/tasks')


const getAllTasks = (req, res) => {
    res.send('All tasks')
}

const getTask = (req, res) => {
    res.send('A task')
}
const updateTasks = (req, res) =>{
    res.send('update task')
}
const createTasks =(req, res) =>{
    res.send('post task ')
}
const deleteTasks =(req, res) =>{
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    getTask,
    updateTasks,
    createTasks,
    deleteTasks
}