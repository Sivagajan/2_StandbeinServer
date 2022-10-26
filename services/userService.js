import { getDb } from "../util/db.js"


export const userLoginService = async (user) => {
    const db = await getDb()
    const result = await db.collection('user').findOne({username: user.username})

    return result
}