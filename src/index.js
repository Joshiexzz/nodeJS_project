import express from "express";
import "dotenv/config"
import statusCodes from "http-status-codes"
import userRouter from "./routes/user.routes.js"
import bodyParser from "body-parser"
const app=express()
const PORT=process.env.PORT

app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.status(statusCodes.OK).json({message:"Welcome to my App"})
})

app.use("/api/users",userRouter)

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
})

