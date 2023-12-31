import express from 'express'
import cors from 'cors'
import connectDB from './Database/dbConfig.js'
import empRouter from './Routers/employee.router.js'
import dotenv from 'dotenv'

dotenv.config()
const port=process.env.PORT

const app=express()

app.use(cors())
app.use(express.json())//we dont need to body parser


connectDB()

app.get("/",(req,res)=>{
    res.send("connected")
})

app.use('/api',empRouter)

app.listen(port,()=>{
    console.log("App is listening",port);
})

