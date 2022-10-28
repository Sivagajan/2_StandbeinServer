import { getAllOrderService, addOrderService } from "../services/orderService.js"

export const getAllOrderController = async (req,res) => {

    try{
        const orders = await getAllOrderService()
        console.log(orders)
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json({error: error})
    }
}

export const addOrderController = async (req,res) => {
    try{
        const order = req.body
        console.log('controller',order)
        const adding = await addOrderService(order)
        console.log(adding)
        res.status(200).json({state:true})
    }catch(error){
        res.status(500).json({state: false})
    }
}