const express = require('express')
const app = express();
const task = require('./Route/Task')


const mongoose = require('mongoose')
//import dotenv
require('dotenv').config()

// import db
const db = require('./db/Connect').Mongo_URL;

//db connection
mongoose.connect(db, {dbName: 'task-manager-app'})
.then(()=> console.log('connected to MongoDB'))
.catch((err)=> console.error(err))


// app.get('/api/v1/tasks', (req, res,)=>{
//     res.send('Get all task')
// })
// app.get('/api/v1/tasks/:id', (req, res)=>{
//     res.send('get particular task')
// })


app.use('/api/v1/tasks', task)


app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))

app.listen(8000, ()=>{
    console.log('port is listening @ 8000')
})  