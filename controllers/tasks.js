const tasks = require('../models/tasks');
const Task = require('../models/tasks')

const getAllTasks = async(req, res) => {
    // res.send('All tasks')
    
        try {
            const task = await Task.find({});
            res.status(201).json({ task });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    };


const getTask = async(req, res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findById({_id:taskID})
        if(!task){
            return res.status(404).json({message: 'task not found'})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(400).json({error:err.message})
    }
   
}
const updateTasks = async(req, res) =>{
    try{
        const {id:taskID} = req.params
        const task = await tasks.findByIdAndUpdate({_id:taskID}, req.body, {new: true,})
        if(!task){
            return res.status(404).json({message:'Task not found'})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(400).json({error:err.message})
    }
    
}
// const createTasks =(req, res) =>{
//     res.send('post task ')
// }
const deleteTasks =async (req, res) =>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(404).json({message: 'Task not found'})
        }
        res.status(200).json('deleted successfully')
    }catch(err){
        res.status(400).json({error:err.mesage})
    }

    // res.send('delete task')
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