const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModel')
const bcrypt = require('bcrypt');

router.post('/register', async(req,res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signUpUser = new signUpTemplateCopy({
        fullname:req.body.fullname,
        username:req.body.username,
        password:securePassword ,
    })
    signUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        if(error.code === 11000){
            res.json({status:'error',error:'Username already in use!'})
        }
    })
});


module.exports = router;