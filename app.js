const express = require('express')
const app = express();
const task = require('./Route/Task')

app.use(express.json())
app.use(express.urlencoded({extended: false}))


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


app.listen(5000, ()=>{
    console.log('port is listening @ 5000')
})  