import { ObjectId } from "mongodb"
import { getDb } from "../util/db.js"


export const getAllOrderService = async (req, res) => {
    const db = await getDb()
    const result = db.collection("order").find().toArray()

    if(result){
        return result
    }else{
        res.send(500).send('Bestellungen konnten nicht geladen werden')
    }
}

export const changeStatusService = async (req,res) => {

    const orderstatus = req.body.state
    const id = req.body._id

    const db = await getDb()
    const result = db.collection("order").updateOne({_id: new ObjectId(id)},{$set:{orderstatus}})

    if(result){
        res.status(200).send('Bestellungsstatus aktualisiert')
    }else{
        res.status(500).send('Bestellungsstatus konnten nicht aktualisiert werden')
    }
}

// topseller muss noch gesucht werden