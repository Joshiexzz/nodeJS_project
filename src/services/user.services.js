export const userFirstService= async (args)=>{
    console.log("Reached service layer")
    console.log("Doing some database work")
    const someDataFromDatabase ="My Data"
    return someDataFromDatabase
}

export const loginUserService =async(loginData)=>{
    console.log(loginData);
    const email=loginData.email;
    const password=loginData.password;
    
    if(email=='example@gmail.com'&& password=="123"){
        return {message:"Login Successfull"}
    }
    else{
        return{message:"Login Failed"}
    }
}

// export const getAllUsersService= async (dataget)=>{
//     const usersData=[
//         {email: "AJ@gmail.com",password:"AJ"},
//         {email: "AC@gmail.com", password:"AC"},
//         {email: "PB@gmail.com",password:"PB"}
//     ];
//     return usersData; 
// }
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

 export async function getAllUsersService() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany()
  return allUsers;
}

getAllUsersService()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

export async function writeUsersService() {
    await prisma.user.create({
      data: {
        id:'7',
        fullName: 'AJ',
        email: 'AJ@gmail.com',
        password:'qwerty',
        gender:'Male'
        // posts: {
        //   create: { title: 'Hello World' },
        // },
        // profile: {
        //   create: { bio: 'I like turtles' },
        // },
      },
    })
  
    const allUsers = await prisma.user.findMany({
    //   include: {
    //     posts: true,
    //     profile: true,
    //   },
    })
    console.dir(allUsers, { depth: null })
  }