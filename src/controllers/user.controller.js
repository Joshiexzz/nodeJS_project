import { StatusCodes } from "http-status-codes"
import { loginUserService, userFirstService, getAllUsersService } from "../services/user.services.js"

export const firstController =async (req,res)=>{
    const data = await userFirstService()
res.status(StatusCodes.OK).json({message: data})
}

export const userLoginController =async(req,res)=>{
    console.log(req);
    const data=await loginUserService(req.body)
    res.status(StatusCodes.ACCEPTED).json(data);
}

export const getAllUsers=async (req,res)=>
    {
        console.log(req)
        const data =await getAllUsersService(req,res)
        res.status(StatusCodes.ACCEPTED).json(data)
    }