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

export const getAllUsersService= async (dataget)=>{
    const usersData=[
        {email: "AJ@gmail.com",password:"AJ"},
        {email: "AC@gmail.com", password:"AC"},
        {email: "PB@gmail.com",password:"PB"},
    ];
    return usersData; 
}