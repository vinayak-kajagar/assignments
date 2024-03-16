const {Router} = require('express')
const Route = Router();
import {userValidation,signInValidation,tokenValidation} from '../middleware/User'
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config';
import { resolve } from 'path';

const prisma = new PrismaClient();

Route.post("/users/signup",userValidation,async (req,res) => {


    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const response = await prisma.user.findFirst({
        where: {
            email: email
        }
    });    

    if(response && response.email == email){
        res.status(400).json({msg : "email already exsists"})
    }else{

   const result =  await prisma.user.create({data:{
        username,
        password,
        email
    } })
 
    res.status(201).json(result)
    }
})

Route.post("/users/signin",signInValidation,async (req,res)=>{
    const username  = req.body.username
    const response = await prisma.user.findFirst({
        where: {
            username: req.body.username
        }
    });   

    if(response.username == req.body.username && response.password == req.body.password){
        const token =   jwt.sign({username},JWT_SECRET)
        res.status(200).json({msg : "user logged in successfully and here is token = "+token})

    }else{
        res.status(401).json({msg:'username / password incorrect'})
    }
})

Route.post("/",tokenValidation,async(req,res)=> { 
  const username = req.username
  const {title , body, tags} = req.body
  if(tags.length > 10){
    res.json({msg:"you cannot add more than 10 tags"})
  }else{

  const result = await prisma.blog.create({
    data: {
        title,
        body,
        username,
        tags:{
            create:tags
        }
      },
      include: {
        tags: true
      }
  })

res.status(201).json({msg : "blog got created successfully"})
  }
})

Route.put("/:id",tokenValidation,async(req,res)=> { 
    const blogId = req.params.id 
    const username = req.username
    const {title , body,tags} = req.body
    const result =  await prisma.blog.update({
        where:{
            id:blogId,
            username:username
        }
    ,data:{
      title,
      body,
      tags:{
        deleteMany:{},
        create:tags      }
  }
})
  res.status(201).json({msg : "blog got updated successfully with title = "+result.title})
  
  })

Route.get("/",tokenValidation,async(req,res)=>{
    const username = req.username
    const result = await prisma.blog.findMany({
        where : {
            username : username
        }
    })
    res.status(200).json(result)
})

Route.get("/:id",tokenValidation,async (req,res)=>{
    const username = req.username
    const blogId = req.params.id 
      const result = await prisma.blog.findUnique({
        where:{
            username:username,
            id: blogId
        },
        include: {
            tags: true
            
          }   
            })
     if(!result){
              res.status(404).json({msg:"blog post not found"})
        }
       res.status(200).json(result)
})

  
Route.delete("/:id",tokenValidation,async(req,res)=>{
    const blogId = req.params.id 
    const username = req.username
    try{
          const userDeleted =   await prisma.blog.delete({
                where:{
                    username:username,
                    id:blogId
                }
            })
            res.status(200).json({msg:`user ${userDeleted.username} successfully`})
}catch(errors){
    res.json(errors.meta.cause)
}
})

module.exports=Route