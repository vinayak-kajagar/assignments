import z from 'zod';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config';

 export const userValidation = (req, res , next)=>{
    const User = z.object({
        username: z.string(),
        password: z.string(),
        email: z.string().email()
      });
      try {
        const result = User.parse(req.body);
        console.log(result);
        next();
    } catch (error) {
        // Handle validation errors
        res.status(400).json({
            error: "Validation failed",
            details: error.errors
        });
    }
 }

 export const signInValidation = (req,res,next) => {
    const usernameSchema = z.string()
    const passwordSchema = z.string()

    try{
    usernameSchema.parse(req.body.username)
    passwordSchema.parse(req.body.password)
    next()
    }catch(error){
        res.status(400).json({
            error: "Validation failed",
            details: error.errors
        });
    }
 }

 export const tokenValidation = (req,res,next)=>{
    const token = req.headers.authorization; // bearer token
    const words = token.split(" "); // ["Bearer", "token"]
    const jwtToken = words[1]; // token
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username) {
            req.username = decodedValue.username
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
 }

