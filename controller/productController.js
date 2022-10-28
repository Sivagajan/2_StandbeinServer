import { addProductService, editProductService, getAllProductService } from "../services/productService.js"

export const getAllProductController = async (req, res) => {

    try{
        const products = await getAllProductService()
        console.log(products)
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({error: error})
    }
}

export const addProductController = async (req,res) => {
    try{
        const product = req.body
        const adding = await addProductService(product)
        console.log(adding)
        res.status(200).json(adding)
    }catch(error){
        res.status(500).json({error: error})
    }
}

export const editProductController = async (req, res) => {
    try{
        const editing = await editProductService()
        console.log(editing)
        res.status(200).json(editing)
    }catch(error){
        res.status(500).json({error: error})
    }
}

