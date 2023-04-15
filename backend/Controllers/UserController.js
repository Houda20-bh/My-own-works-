const {validationResult}= require('express-validator')
const mongoose = require ('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const UserModel = require('../Models/User')
const Register = async(req,res)=>{
    try{
        // validate data from the req
        const errors= validationResult(req)
        if(!errors.isEmpty()){
            res.status(402).json ({errors:errors.mapped()})
        }
        // verify if the user is already exsist
        const {name,email,password,role}= req.body
        const found = await UserModel.findOne({email})
        if(found){
            res.status(401).json({message:'user already have an account'})
        }
        //Create my user or register my new user
        //1-a hash or crypt my password
        const salt = bcrypt.genSaltSync(10)
        const hashPassword =  await bcrypt.hash(password,salt)
      //1-b save My user to the DB
      const newUser = await UserModel.create({
        name,
        email,
        password: hashPassword,
        role,
      })
      res.status(200).json(newUser)
    }
    catch(error){
        res.status(500).json({message:error})
    }
}

module.exports ={Register}