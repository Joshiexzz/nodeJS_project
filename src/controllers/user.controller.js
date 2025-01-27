import { StatusCodes } from "http-status-codes"
import { loginUserService, userFirstService, getAllUsersService,writeUsersService} from "../services/user.services.js"

export const firstController =async (req,res)=>{
    const data = await userFirstService()
res.status(StatusCodes.OK).json({message: data})
}
export const userLoginController=async (req,res,next)=>
    {
        console.log(req)
        try{
        const data= await loginUserService(req.body);
        res.status(StatusCodes.ACCEPTED).json(data);
        throw new Error("This is the error")
        }
  
    catch(error)
    {
        console.log(error);
        next(error);
    }
}
    export const getAllUsers=async (req,res)=>
    {
        console.log(req)
        const data =await getAllUsersService(req,res)
        res.status(StatusCodes.ACCEPTED).json(data)
    }
    export const writeUsers=async (req,res)=>
        {
            console.log(req)
            const data =await writeUsersService(req,res)
            res.status(StatusCodes.ACCEPTED).json(data)
        }