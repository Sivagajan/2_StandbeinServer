import { getDb } from "../util/db.js"


export const userLoginService = async (user) => {
    const db = await getDb()
    console.log('userService',user.username)
    const result = await db.collection('users').findOne({username: user.username})
    console.log('userService', result)
    return result
}