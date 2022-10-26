import { getAllOrderService } from "../services/orderService.js"

export const getAllOrderController = async (req,res) => {

    try{
        const orders = await getAllOrderService()
        console.log(orders)
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json({error: error})
    }
}