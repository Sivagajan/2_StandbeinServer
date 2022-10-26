import { verifyToken } from "../util/token.js";

export const checkToken = (req, res) => {
    try {
        const token = req.headers.authentication.split(" ")[1]
        const result = verifyToken(token)
        console.log(result);
        

    } catch (error) {
        console.log(error);
        res.status(403).json({ state: false })
    }
}