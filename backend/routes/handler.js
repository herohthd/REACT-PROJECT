const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModel')
const bcrypt = require('bcrypt');

router.post('/login', async(req,res) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(req.body.password, saltPassword)

    const signUpUser = new signUpTemplateCopy({
        fullname:req.body.fullname,
        username:req.body.username,
        password:securePassword 
    })
    signUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
});


module.exports = router;