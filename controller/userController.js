import { userLoginService } from "../services/userService.js"


export const loginController = async (req,res) => {

    const user = req.body

    const result = await userLoginService()
    console.log(result)

    if(result.password === user.password){
        
        res.status(200).json({token: token})
    }else{
        res.status(200).json({message: 'Fehler beim Anmelden'})
    }
}