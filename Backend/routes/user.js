const router = require('express').Router;
const {User ,validate } = require('../model.js/user');
const bcrypt = require('bcrypt')


// router.post("/" , async (req,res) =>{
//     try{
//         const {error} = validate(req.body);
//         if(error)
//         return res.status(400).send({message :error.details[0].message})

//         // const user = await User.findOne({email : req.body.email})
//         // re
//     }
// })