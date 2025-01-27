import express from "express";
import "dotenv/config"
import statusCodes from "http-status-codes"
import userRouter from "./routes/user.routes.js"
import bodyParser from "body-parser"
import { errorHandler } from "./lib/errorhandler.js";
const app=express()
const PORT=process.env.PORT

app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.status(StatusCodes.OK).json({message:"Welcome to my App"})
})

app.use("/api/users",userRouter)

app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
})

