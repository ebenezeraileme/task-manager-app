const express = require('express')
const app = express();



app.use(express.static('./public'))
app.use(express.urlencoded({extended: false}))

app.listen(8000, ()=>{
    console.log('port is listening @ 8000')
})