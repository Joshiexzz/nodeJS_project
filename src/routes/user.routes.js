import  Router  from "express"
import { firstController, userLoginController,getAllUsers, writeUsers } from "../controllers/user.controller.js"

const userRouter=Router()

userRouter.get("/",firstController)
userRouter.post("/login",userLoginController)
userRouter.get("/details",getAllUsers)
userRouter.post("/details",writeUsers)


export default userRouter