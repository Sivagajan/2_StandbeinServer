import { ObjectId } from "mongodb"
import { getDb } from "../util/db.js"

export const getAllProductService = async ( _,res) => {

    const db = await getDb()
    const result = await db.collection("product").find().toArray()

    if(result){
        return result
    }else{
        res.send(500).send('produkte laden fehlgeschlagen')
    }
}

export const addProductService = async (req, res) => {

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

    const login = await getDb()
    const db = await login.collection("product").insertOne(product)

    if(db){
        res.status(200).send('insert war erfolgreich')
    }else{
        res.status(500).send('insert ist fehlgeschlagen')
    }
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