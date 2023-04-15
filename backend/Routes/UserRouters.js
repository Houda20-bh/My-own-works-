const express = require('express')
const router = express.Router()
const {Register, SignIn}= require("../Controllers/UserController")
const {DataValidation} = require('../Middlewares/DataValidation')


router.post("/register",DataValidation, Register)
router.post("/login", SignIn)



module.exports = router;