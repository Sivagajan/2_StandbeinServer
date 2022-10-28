import { ObjectId } from "mongodb"
import { getDb } from "../util/db.js"

export const getAllProductService = async () => {

    const db = await getDb()
    const result = await db.collection("product").find().toArray()

    return result
}

export const addProductService = async (product) => {

    console.log('service',product)
    const db = await getDb()
    const result = await db.collection("product").insertOne(product)

    return result
}

export const editProductService = async (req, res) => {
    const id = req.body._id

    const product = {
        title : req.body.title,
        category : req.body.category,
        description: req.body.description,
        price : req.body.price,
        stock : req.body.stock,
        image : req.body.img,
        variation : req.body.variation,
        size: req.body.size
    }

    const login  = await getDb()
    const db = await login.collection("product").updateOne({_id: new ObjectId(id)}, {set:{product}})

    if(db){
        res.status(200).send('insert war erfolgreich')
    }else{
        res.status(500).send('insert ist fehlgeschlagen')
    }
}

// anzahl der Produkte muss angezeigt werden