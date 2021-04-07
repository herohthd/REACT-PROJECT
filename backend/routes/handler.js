const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModel')

router.post('/login', (req,res) => {
    const signUpUser = new signUpTemplateCopy({
        fullname:req.body.fullname,
        username:req.body.username,
        password:req.body.password 
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