import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

const protect =async(req,res,next)=>{
    console.log("authmiddle")
    let token = req.headers.authorization
    console.log(token)
    if(req.headers.authorization){
        try{

            const decoded = jwt.verify(token,process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')
            next()
        }catch(error){
            console.log(error)
            res.status(401).send(error)
        }
    }

    if(!token){
        res.status(404).send('no Token')

    }
}

export {protect}