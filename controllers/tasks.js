const Task = require('../models/tasks')

const getAllTasks = (req, res) => {
    res.send('All tasks')
}

const getTask = (req, res) => {
    res.send('A task')
}
const updateTasks = (req, res) =>{
    res.send('update task')
}
// const createTasks =(req, res) =>{
//     res.send('post task ')
// }
const deleteTasks =(req, res) =>{
    res.send('delete task')
}

const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


module.exports = {
    getAllTasks,
    getTask,
    updateTasks,
    createTasks,
    deleteTasks
}