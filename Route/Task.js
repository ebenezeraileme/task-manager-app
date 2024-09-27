const express = require('express')
const router = express.Router()
const {getAllTasks, getTask, updateTasks, createTasks, deleteTasks} = require('../controllers/tasks')

// router.get('/', (req, res)=>{
//     res.send('all of us')
// })
// router.get('/:id', (req, res)=>{
//     res.send('many of us')
// })

// router.route('/').get(getAllTasks)
// router.route('/:id').get(getTask)

router.route('/').post(createTasks).get(getAllTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks)


module.exports = router