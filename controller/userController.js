import { userLoginService } from "../services/userService.js"


export const loginController = async (req,res) => {

    const user = req.body

    console.log(user)

    const result = await userLoginService(user)
    console.log('userController',result)

    if(result.password === user.password){
        
        res.status(200).json({token: token})
    }else{
        res.status(200).json({message: 'Fehler beim Anmelden'})
    }
}