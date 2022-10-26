import jwt from 'jsonwebtoken'

export const createToken = (claims) => {
    const token = jwt.sign(claims,process.env.JWT_SECRET, {expiresIn: '5min'})

    return token
}