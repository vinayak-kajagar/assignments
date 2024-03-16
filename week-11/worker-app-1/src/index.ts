import express from 'express'
import bodyParser from 'body-parser'
// import Route from './Routes/route'
const route  = require('./Routes/route')

const app = express();
app.use(express.json())
app.use('/blog',route)

const port = 3000
app.listen(port,()=>{
    console.log("port started on = "+port)
})

