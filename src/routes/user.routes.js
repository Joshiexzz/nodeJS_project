import  Router  from "express"
import { firstController, userLoginController,getAllUsers } from "../controllers/user.controller.js"

const userRouter=Router()

userRouter.get("/",firstController)
userRouter.post("/login",userLoginController)
userRouter.get("/details",getAllUsers)
// userRouter.post("/details",getAllUsers)

export default userRouter